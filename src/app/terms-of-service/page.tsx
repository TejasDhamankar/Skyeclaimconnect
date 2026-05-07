import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Skye Claim Connect",
  description: "Terms of Service for using Skye Claim Connect services",
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>Welcome to Skye Claim Connect ("Company", "we", "our", "us"). These Terms of Service govern your use of our website located at <a href="https://skyeclaimconnect.com">skyeclaimconnect.com</a> (together or individually "Service") operated by Skye Claim Connect.</p>
        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Communications</h2>
        <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. No Attorney-Client Relationship</h2>
        <p>The use of this website, including the submission of information through forms or other means, does not create an attorney-client relationship between you and Skye Claim Connect or any of its affiliated attorneys or law firms. An attorney-client relationship is only formed when there is an explicit agreement between you and a specific attorney or law firm to represent you.</p>
        <p>Information submitted through this website will be shared with third-party attorneys who participate in our network. We do not guarantee that any attorney will agree to represent you or that your case will qualify for legal representation.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Case Evaluation Process</h2>
        <p>The case evaluation we provide is preliminary and based on the limited information you provide. It is not a substitute for a comprehensive legal analysis by a qualified attorney who has been formally retained to represent you. We make no guarantees about the outcome of any case or the amount of any potential settlement or verdict.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Content</h2>
        <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post on or through the Service.</p>
        <p>By posting content on or through the Service, you represent and warrant that the content is accurate and not misleading, does not violate the rights of any third party, and complies with all applicable laws.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Accuracy of Information</h2>
        <p>While we strive to provide accurate information about mass tort cases and legal issues, we cannot guarantee the accuracy, completeness, or timeliness of the information on our website. Legal information can change rapidly, and case eligibility criteria may be updated as litigation progresses.</p>
        <p>The information provided on this website is for general informational purposes only and should not be relied upon as legal advice for your specific situation.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Referrals</h2>
        <p>Skye Claim Connect may refer your case to third-party attorneys or law firms who are not employed by or affiliated with Skye Claim Connect. We do not guarantee the quality of representation provided by these third parties, and we are not responsible for their actions or omissions.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Links To Other Web Sites</h2>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Skye Claim Connect. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the United States and the State of New Jersey, without regard to its conflict of law provisions.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at  intake@skyeclaimconnect.com.</p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

