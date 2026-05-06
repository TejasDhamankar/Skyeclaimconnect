import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TCPA Consent | Skye Claim Connect",
  description: "TCPA and communication consent terms for Skye Claim Connect.",
};

const TcpaConsentPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">TCPA Consent</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Consent to Communications</h2>
        <p>
          By submitting your information through this website, you expressly consent to be
          contacted by Skye Claim Connect and its partners, including attorneys or law firms,
          regarding your inquiry and potential legal services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Contact Methods</h2>
        <p>
          You agree to receive communications via phone calls, automated dialing systems,
          prerecorded messages, text messages (SMS), and email at the contact information you
          provide.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Consent Is Not a Condition of Purchase</h2>
        <p>
          Your consent is not required as a condition to purchase any goods or services. You may
          seek legal services through other channels without providing this consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Message and Data Rates</h2>
        <p>
          Message and data rates may apply depending on your mobile carrier plan. Skye Claim
          Connect is not responsible for carrier charges.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Revoking Consent</h2>
        <p>
          You may revoke consent at any time by following unsubscribe instructions in messages,
          replying STOP to SMS communications where applicable, or contacting us directly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p>If you have questions about this consent, contact us:</p>
        <p>Email: support@skyeclaimconnect.com</p>
        <p>Phone: +1 555-010-2020</p>
      </div>
    </div>
  );
};

export default TcpaConsentPage;

