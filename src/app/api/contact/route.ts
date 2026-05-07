// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, ContactForm } from "@/lib/db";

export const runtime = "nodejs";

const TF_USERNAME = "API";
const TF_API_KEY = process.env.TRUSTEDFORM_API_KEY || "";
const APEX_DEPO_SUBMIT_URL =
  process.env.APEX_DEPO_SUBMIT_URL ||
  "https://apex-services-nbd7z6aa7a-uc.a.run.app/intake/depo/depo/zapier/aldrin/submit";
const APEX_WEBSOURCE = process.env.APEX_WEBSOURCE || "https://skyeclaimconnect.com";
const APEX_META_USER_NAME = process.env.APEX_META_USER_NAME || "Skye Claim Connect";
const APEX_META_USER_EMAIL = process.env.APEX_META_USER_EMAIL || "intake@skyeclaimconnect.com";
const APEX_META_CAMPAIGN = process.env.APEX_META_CAMPAIGN || "";
const APEX_META_SELLER = process.env.APEX_META_SELLER || "";

async function submitDepoLeadToApex(payload: Record<string, unknown>) {
  const res = await fetch(APEX_DEPO_SUBMIT_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let json: any = null;
  try {
    json = JSON.parse(text);
  } catch {}

  return {
    ok: res.ok && (json?.status === "Success" || json?.status === "success" || res.status < 300),
    status: res.status,
    json,
    raw: text,
  };
}

function getClientIp(req: NextRequest) {
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) return xfwd.split(",")[0]?.trim();
  return req.headers.get("x-real-ip") || req.cookies.get("client-ip")?.value || "0.0.0.0";
}

function isLikelyTrustedFormUrl(url: string | undefined) {
  if (!url) return false;
  try {
    const u = new URL(url);
    return /(^|\.)trustedform\.com$/i.test(u.hostname);
  } catch {
    return false;
  }
}

function basicAuthHeader(user: string, pass: string) {
  const token = Buffer.from(`${user}:${pass}`).toString("base64");
  return `Basic ${token}`;
}

/** POST to the certificate URL to retain/claim it in ActiveProspect */
async function claimTrustedFormCertificate(
  certUrl: string,
  payload: { reference?: string; vendor?: string; email_1?: string; phone_1?: string }
) {
  const res = await fetch(certUrl, {
    method: "POST",
    headers: {
      Authorization: basicAuthHeader(TF_USERNAME, TF_API_KEY),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let json: any = null;
  try {
    json = JSON.parse(text);
  } catch {}
  return { ok: res.status === 201, status: res.status, json, raw: text };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const rawTfUrl: string = body.trustedFormCertUrl || body.xxTrustedFormCertUrl || "";
    const ipAddress = getClientIp(req);
    const userAgent = req.headers.get("user-agent") || "Unknown";
    const referer = req.headers.get("referer") || "";

    await connectToDatabase();

    const tfUrl = isLikelyTrustedFormUrl(rawTfUrl) ? rawTfUrl : "";

    const submission = new ContactForm({
      ...body,
      trustedFormCertUrl: tfUrl,
      ipAddress,
      userAgent,
      referer,
      submittedAt: new Date(),
    });
    await submission.save();

    let claimSummary: { ok: boolean; status?: number } | null = null;
    let apexSummary: { ok: boolean; status?: number; response?: unknown } | null = null;

    if (tfUrl && TF_API_KEY) {
      try {
        const claim = await claimTrustedFormCertificate(tfUrl, {
          reference: submission._id.toString(),
          vendor: "skyeclaimconnect.com",
          email_1: body.email,
          phone_1: body.phone,
        });

        claimSummary = { ok: claim.ok, status: claim.status };

        submission.set({
          trustedFormClaimed: claim.ok,
          trustedFormClaimStatus: claim.status,
          trustedFormClaimResponse: claim.json ?? claim.raw,
          claimedAt: new Date(),
        });
        await submission.save();
      } catch (e) {
        console.error("TrustedForm claim error:", e);
        submission.set({ trustedFormClaimed: false, trustedFormClaimError: String(e) });
        await submission.save();
      }
    }

    if (body.caseType === "depo-provera") {
      try {
        const apexPayload = {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
          street: body.street || "",
          city: body.city || "",
          state: body.state || "",
          zip: body.zip || "",
          notes: body.additionalInfo || "",
          meta: {
            id: submission._id.toString(),
            timestamp: new Date().toISOString(),
            createDt: submission.createdAt?.toISOString?.() || new Date().toISOString(),
            updateDt: new Date().toISOString(),
            user: {
              name: APEX_META_USER_NAME,
              email: APEX_META_USER_EMAIL,
            },
            campaign: APEX_META_CAMPAIGN || undefined,
            seller: APEX_META_SELLER || undefined,
            claimant: `${body.firstName || ""} ${body.lastName || ""}`.trim(),
            websource: referer || APEX_WEBSOURCE,
          },
        };

        const apexResponse = await submitDepoLeadToApex(apexPayload);
        apexSummary = {
          ok: apexResponse.ok,
          status: apexResponse.status,
          response: apexResponse.json ?? apexResponse.raw,
        };

        submission.set({
          apexSubmitted: apexResponse.ok,
          apexSubmitStatus: apexResponse.status,
          apexSubmitResponse: apexResponse.json ?? apexResponse.raw,
        });
        await submission.save();
      } catch (e) {
        console.error("APEX submit error:", e);
        submission.set({
          apexSubmitted: false,
          apexSubmitError: String(e),
        });
        await submission.save();
      }
    }

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        success: true,
        trustedForm: {
          providedUrl: Boolean(tfUrl),
          claimed: claimSummary?.ok ?? false,
          status: claimSummary?.status ?? null,
        },
        apex: {
          submitted: apexSummary?.ok ?? false,
          status: apexSummary?.status ?? null,
        },
        id: submission._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        message: "Error submitting contact form",
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

