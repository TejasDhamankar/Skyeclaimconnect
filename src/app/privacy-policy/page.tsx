import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Skye Claim Connect",
  description: "How Skye Claim Connect collects, uses, and protects your personal information",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>Skye Claim Connect ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website skyeclaimconnect.com (the "Site") or use our services.</p>
        <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
        <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the Site, or otherwise when you contact us. The personal information we collect may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Health and medical information relevant to your potential legal claim</li>
          <li>Information about your potential legal claim</li>
          <li>Other information you choose to provide</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
        <p>When you visit our Site, we may collect certain information automatically from your device, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Time zone setting</li>
          <li>Pages visited and time spent on those pages</li>
          <li>Referring website address</li>
        </ul>
        <p>We may also collect information through cookies and similar technologies. See our Cookie Policy section for more details.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Evaluate your potential legal claim</li>
          <li>Connect you with appropriate attorneys or law firms</li>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you updates, marketing communications, and other information that may be of interest to you</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Protect against, identify, and prevent fraud and other illegal activity</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
        <p>We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Attorneys and Law Firms:</strong> We share your information with attorneys and law firms who may be able to assist with your potential legal claim.</li>
          <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf.</li>
          <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
        <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to object to or restrict processing of your information</li>
          <li>The right to data portability</li>
        </ul>
        <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
        <p>Our Site is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so that we can take necessary actions.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email:  intake@skyeclaimconnect.com</p>
        <p>Phone: 13023070025</p>
        <p>Address: 613, Ridge Road, 201 Monmouth Junction, NJ, 08852</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;



