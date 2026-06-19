// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, ContactForm } from "@/lib/db";

export const runtime = "nodejs";

const TF_USERNAME = "API";
const TF_API_KEY = process.env.TRUSTEDFORM_API_KEY || "";
const PURSUING_API_KEY_FALLBACK = "Wtjrqo2FIN0JzxJ7P8yPNRKcsfw7TakEGyeSXM2KAJUIK2oO";
const PURSUING_API_KEY = process.env.PURSUING_API_KEY || PURSUING_API_KEY_FALLBACK;
const PURSUING_LEADS_URL =
  process.env.PURSUING_LEADS_URL || "https://pursuing.com/api/publisher/leads";

async function submitLeadToPursuing(payload: Record<string, unknown>) {
  const res = await fetch(PURSUING_LEADS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Api-Key": PURSUING_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let json: any = null;
  try {
    json = JSON.parse(text);
  } catch {}

  return {
    ok: res.ok,
    status: res.status,
    json,
    raw: text,
  };
}

function getClientIp(req: NextRequest) {
  let ip = "0.0.0.0";
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) {
    ip = xfwd.split(",")[0]?.trim();
  } else {
    ip = req.headers.get("x-real-ip") || req.cookies.get("client-ip")?.value || "0.0.0.0";
  }

  // Handle localhost/loopback for testing (Pursuing rejects localhost)
  if (ip === "::1" || ip === "127.0.0.1" || ip === "0.0.0.0") {
    return "3.13.104.8"; // Sample public IP provided in client requirements
  }
  return ip;
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

function normalizePhone(phone: string | undefined) {
  let cleaned = (phone || "").replace(/\D/g, "");
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    cleaned = cleaned.substring(1);
  }
  return cleaned;
}

const PURSUING_CASE_TYPE_MAPPING: Record<string, number> = {
  "camp-lejeune": 42,
  "3m-earplugs": 154,
  "roundup": 15,
  "cpap": 20,
  "tylenol-autism": 38,
  "hair-relaxer": 22,
  "zantac": 26,
  "firefighting-foam": 39,
  "infant-formula-nec": 46,
  "exactech": 19,
  "pfas-water-contamination": 69,
  "hair-straightener-cancer": 22,
  "toxic-baby-food": 41,
  "paraquat": 16,
  "talcum-powder": 14,
  "hernia-mesh": 17,
  "lds-sex-abuse": 132,
  "depo-provera": 27,
  "roblox-addiction": 130,
  "motor-vehicle-accident": 160,
  "rideshare": 160,
  "ozempic": 50,
  "slip-and-fall": 37,
  "dog-bite": 34,
  "wtc-exposure": 147,
  "other": 147,
};

function buildPursuingNarrative(body: Record<string, any>) {
  const parts = [
    body.additionalInfo,
    body.medicalCondition ? `Medical condition: ${body.medicalCondition}` : "",
    body.exposurePeriod ? `Exposure period: ${body.exposurePeriod}` : "",
  ].filter(Boolean);

  return parts.join("\n");
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
    const pursuingLeadId = String(body.jornayaLeadId || tfUrl || "NO-TOKEN").trim();

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
    let pursuingSummary: { ok: boolean; status?: number; response?: unknown } | null = null;

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

    if (body.caseType === "depo-provera" || body.caseType === "talcum-powder") {
      try {
        const pursuingCaseTypeId = PURSUING_CASE_TYPE_MAPPING[body.caseType] || undefined;
        const normalizedPhone = normalizePhone(body.phone);
        const normalizedZip = (body.zip || "").replace(/\D/g, "").substring(0, 5);

        const pursuingPayload = {
          LeadID: pursuingLeadId,
          external_id: submission._id.toString(),
          first_name: body.firstName || "",
          last_name: body.lastName || "",
          email: body.email || undefined,
          phone: normalizedPhone || undefined,
          case_type_id: pursuingCaseTypeId,
          case_type: !pursuingCaseTypeId ? body.caseType : undefined,
          state: body.state || undefined,
          zip: normalizedZip || undefined,
          address: body.street || undefined,
          city: body.city || undefined,
          ip_address: ipAddress,
          user_agent: userAgent,
          narrative: buildPursuingNarrative(body) || undefined,
          website: referer || "https://skyeclaimconnect.com",

          // Case-specific fields for Depo & Talc
          ssn: body.ssn || undefined,
          dob: body.dob || undefined,
          incident_date: body.incidentDate || undefined,
          start_date: body.startDate || undefined,
          end_date: body.endDate || undefined,
          pharmacy_name: body.pharmacyName || undefined,
          pharmacy_address: body.pharmacyAddress || undefined,
          pharmacy_phone: body.pharmacyPhone || undefined,
          doctor_name: body.doctorName || undefined,
          facility_name: body.facilityName || undefined,
          facility_address: body.facilityAddress || undefined,
          facility_phone: body.facilityPhone || undefined,
          pcp_name: body.pcpName || undefined,
          pcp_address: body.pcpAddress || undefined,
          pcp_phone: body.pcpPhone || undefined,
          pcp_email: body.pcpEmail || undefined,
          medical_notes: body.medicalNotes || undefined,
          emergency_name: body.emergencyName || undefined,
          emergency_relationship: body.emergencyRelationship || undefined,
          emergency_address: body.emergencyAddress || undefined,
          emergency_phone: body.emergencyPhone || undefined,
          emergency_email: body.emergencyEmail || undefined,
          date_of_death: body.dateOfDeath || undefined,
          cancer_type: body.cancerType || undefined,
          is_deceased: body.isDeceased || undefined,
          talc_perineal_4yr: body.talcPerineal4yr || undefined,
          talc_brca_negative: body.talcBrcaNegative || undefined,
          diagnosed_18_70: body.diagnosed18To70 || undefined,
          diagnosis_date: body.diagnosisDate || undefined,

          extras: {
            source: "skyeclaimconnect.com",
            trusted_form_cert_url: tfUrl || undefined,
            jornaya_lead_id: body.jornayaLeadId || undefined,
          },
        };

        const pursuingResponse = await submitLeadToPursuing(pursuingPayload);
        
        // Log the response for debugging on localhost
        console.log("Pursuing API Response:", JSON.stringify({
          status: pursuingResponse.status,
          ok: pursuingResponse.ok,
          body: pursuingResponse.json ?? pursuingResponse.raw
        }, null, 2));

        pursuingSummary = {
          ok: pursuingResponse.ok,
          status: pursuingResponse.status,
          response: pursuingResponse.json ?? pursuingResponse.raw,
        };

        submission.set({
          pursuingSubmitted: pursuingResponse.ok,
          pursuingSubmitStatus: pursuingResponse.status,
          pursuingSubmitResponse: pursuingResponse.json ?? pursuingResponse.raw,
        });
        await submission.save();
      } catch (e) {
        console.error("Pursuing submit error:", e);
        submission.set({
          pursuingSubmitted: false,
          pursuingSubmitError: String(e),
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
        pursuing: {
          submitted: pursuingSummary?.ok ?? false,
          status: pursuingSummary?.status ?? null,
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

