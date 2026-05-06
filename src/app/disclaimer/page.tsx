import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Skye Claim Connect",
  description: "Important legal disclaimers regarding the use of Skye Claim Connect services",
};

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Legal Disclaimer</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Attorney Advertising</h2>
        <p>This website is attorney advertising. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. No Legal Advice</h2>
        <p>The content provided on this website is for informational purposes only and does not constitute legal advice. It should not be relied upon as such. We make no warranty, expressed or implied, about the accuracy or reliability of the information on this website or at any other website to which it links.</p>
        <p>Specific legal advice should be sought from a qualified attorney regarding your particular situation. Contacting us through this website or submitting information does not create an attorney-client relationship.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. No Attorney-Client Relationship</h2>
        <p>Skye Claim Connect is not a law firm. We connect potential claimants with attorneys who handle mass tort and class action cases. No attorney-client relationship is created by your use of this website or by your submission of information through our case evaluation forms.</p>
        <p>An attorney-client relationship is only formed when you have signed a written agreement with a specific law firm that explicitly states they will represent you.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. No Guarantee of Results</h2>
        <p>Past case results and settlements discussed on this website do not guarantee or predict similar results in future cases. Each legal case is unique, with its own specific facts and applicable law. The outcome of your case depends on many factors, including the specific facts of your situation, applicable laws, the judge assigned to your case, and many other variables.</p>
        <p>Any discussion of compensation amounts or settlement figures on this website represents information about past results and should not be understood as a promise or guarantee.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Case Evaluation</h2>
        <p>Our free case evaluation is a preliminary assessment only. It is not a comprehensive legal analysis and does not guarantee that your case will qualify for legal representation or compensation. The evaluation is based solely on the information you provide, which may not include all relevant facts and circumstances.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Referrals</h2>
        <p>Cases submitted through this website may be referred to third-party law firms or attorneys. Skye Claim Connect may receive a referral fee from these third parties in accordance with applicable state bar rules. The payment of such fees does not increase the amount charged to clients.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Statutes of Limitations</h2>
        <p>Every legal claim is subject to a statute of limitations, which is a time limit for filing a lawsuit. These time limits vary by state and by the type of claim. Failure to file a lawsuit within the applicable statute of limitations will likely result in the loss of your right to pursue that claim.</p>
        <p>The information on this website about statutes of limitations is general in nature. To determine the specific time limit that applies to your potential claim, you should consult with a qualified attorney promptly.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. External Links</h2>
        <p>This website may contain links to other websites. We have no control over the nature, content, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Updates to Information</h2>
        <p>The legal landscape for mass tort and class action litigation changes frequently. While we strive to keep the information on this website current, we make no guarantees about its accuracy or completeness. Information about case eligibility, settlement amounts, and legal developments may change without notice.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
        <p>If you have any questions about this disclaimer, please contact us at:</p>
        <p>Email: support@skyeclaimconnect.com</p>
        <p>Phone: +1 555-010-2020</p>
        {/* <p>Address: 613, Ridge Road, 201 Monmouth Junction, NJ, 08852</p> */}
      </div>
    </div>
  );
};

export default DisclaimerPage;



