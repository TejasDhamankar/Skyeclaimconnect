import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Skye Claim Connect",
  description: "Accessibility guidelines and accommodations for Skye Claim Connect",
};

const AccessibilityPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Accessibility</h2>
        <p>Skye Claim Connect is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conformance Status</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.</p>
        <p>Skye Claim Connect strives to conform to WCAG 2.1 level AA standards. We are working to ensure that our website is perceivable, operable, understandable, and robust for all users, regardless of ability.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility Features</h2>
        <p>Our website includes the following accessibility features:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Text alternatives for non-text content</li>
          <li>Captions and other alternatives for multimedia</li>
          <li>Content that can be presented in different ways without losing information</li>
          <li>Functionality available from a keyboard</li>
          <li>Users have enough time to read and use content</li>
          <li>Content that does not cause seizures or physical reactions</li>
          <li>Users can easily navigate, find content, and determine where they are</li>
          <li>Text is readable and understandable</li>
          <li>Content appears and operates in predictable ways</li>
          <li>Users are helped to avoid and correct mistakes</li>
          <li>Content is compatible with current and future user tools</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility Accommodations</h2>
        <p>If you have a disability and need assistance accessing our services, we are here to help. We offer the following accommodations:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Phone consultations as an alternative to web forms</li>
          <li>Materials in alternative formats upon request</li>
          <li>Assistance filling out forms or navigating our website</li>
        </ul>
        <p>To request an accommodation or report an accessibility issue, please contact our support team:</p>
        <p>Email: support@skyeclaimconnect.com</p>
        <p>Phone: +1 555-010-2020</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Compatibility with Assistive Technology</h2>
        <p>Our website is designed to be compatible with the following assistive technologies:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Screen readers (like NVDA, JAWS, VoiceOver)</li>
          <li>Speech recognition software</li>
          <li>Screen magnifiers</li>
          <li>Alternative keyboards and input devices</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations and Alternatives</h2>
        <p>Despite our efforts to ensure accessibility of Skye Claim Connect, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>PDF documents: Some of our older PDF documents may not be fully accessible. If you encounter an inaccessible PDF, please contact us, and we will provide the information in an alternative format.</li>
          <li>Videos: Some older videos may not have captions. If you need access to the information in these videos, please contact us for a transcript or alternative format.</li>
          <li>Third-party content: Some content provided by third parties may not be fully accessible. We are working with our partners to improve accessibility across all content.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Assessment and Compliance</h2>
        <p>Skye Claim Connect has conducted the following to assess and improve the accessibility of our website:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Internal evaluations</li>
          <li>External reviews by accessibility experts</li>
          <li>User feedback and testing</li>
        </ul>
        <p>We continue to monitor and improve our website based on these assessments and user feedback.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback</h2>
        <p>We welcome your feedback on the accessibility of Skye Claim Connect. Please let us know if you encounter accessibility barriers:</p>
        <p>Email: support@skyeclaimconnect.com</p>
        <p>Phone: +1 555-010-2020</p>
        {/* <p>Address: 613, Ridge Road, 201 Monmouth Junction, NJ, 08852</p> */}
        <p>We try to respond to feedback within 3 business days.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Ongoing Improvements</h2>
        <p>Skye Claim Connect is committed to continually improving accessibility for all users. We regularly review our website and services to identify and address accessibility issues, update our policies, and ensure that our accessibility goals are met.</p>
        <p>This statement was created on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} and will be reviewed and updated as our website and accessibility practices evolve.</p>
      </div>
    </div>
  );
};

export default AccessibilityPage;



