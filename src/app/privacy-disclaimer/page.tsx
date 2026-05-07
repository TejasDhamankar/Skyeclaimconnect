import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Disclaimer | Skye Claim Connect",
  description: "Privacy disclaimer for Skye Claim Connect website visitors and form submissions.",
};

const PrivacyDisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Disclaimer</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Use Notice</h2>
        <p>
          Information submitted through this website may be used to evaluate potential case
          eligibility and to connect you with legal professionals who may assist with your claim.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. No Attorney-Client Relationship</h2>
        <p>
          Submission of information does not create an attorney-client relationship with Skye Claim
          Connect or any participating attorney or law firm.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Sharing</h2>
        <p>
          To process your request, information may be shared with trusted partners, attorneys, or
          law firms participating in claim intake and review workflows, consistent with applicable
          law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p>
          Reasonable administrative and technical controls are used to protect submitted
          information, but no internet transmission method is guaranteed to be fully secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Choice</h2>
        <p>
          If you do not agree with this disclaimer, do not submit your information through the
          website form. You may contact us directly for general inquiries.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p>If you have questions about this privacy disclaimer, contact us:</p>
        <p>Email:  intake@skyeclaimconnect.com</p>
        <p>Phone: 13023070025</p>
      </div>
    </div>
  );
};

export default PrivacyDisclaimerPage;

