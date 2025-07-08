import React from 'react';
import './PrivacyPolicy.css'; // Reuse the same CSS for consistent styling

function RefundPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-main-content">
        <div className="privacy-policy-sidebar">
          <h3>Refund Policy</h3>
          <ul>
            <li><a href="#eligibility">Eligibility for Refunds</a></li>
            <li><a href="#non-refundable">Non-Refundable Items</a></li>
            <li><a href="#request">Requesting a Refund</a></li>
            <li><a href="#processing">Processing Time</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="privacy-policy-content">
          <h1>Refund Policy</h1>
          <p className="effective-date">Effective starting: October 2, 2024</p>

          <h2 id="eligibility">1. Eligibility for Refunds</h2>
          <p>
            At Indian School for Modern Languages (ISML), we aim to ensure that our students and clients are satisfied with the services provided. Refunds may be granted under the following conditions:
          </p>
          <ul>
            <li>Duplicate payment made by the user.</li>
            <li>Technical issues preventing access to a paid course or service.</li>
            <li>Cancellation within 48 hours of making the payment and before any course activity is utilized.</li>
          </ul>

          <h2 id="non-refundable">2. Non-Refundable Items</h2>
          <p>The following items are not eligible for a refund:</p>
          <ul>
            <li>Courses or classes already attended or partially used.</li>
            <li>Administrative or registration fees.</li>
            <li>Custom packages or services once initiated.</li>
          </ul>

          <h2 id="request">3. Requesting a Refund</h2>
          <p>
            To request a refund, please contact our support team within 7 days of the payment date with the following information:
          </p>
          <ul>
            <li>Full name and registered email address</li>
            <li>Transaction ID or payment receipt</li>
            <li>Reason for the refund request</li>
          </ul>
          <p>
            All requests will be evaluated by our finance department. ISML reserves the right to approve or deny any refund request based on its refund policy.
          </p>

          <h2 id="processing">4. Processing Time</h2>
          <p>
            Approved refunds will be processed within 7–10 business days. The amount will be credited to the original method of payment.
          </p>

          <h2 id="contact">5. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Refund Policy, please contact us:
            <br /><strong>Indian School for Modern Languages (ISML)</strong><br />
            IYPAN Educational Centre Pvt. Ltd.<br />
            Email: <a href="mailto:learnwithisml@iypan.in">learnwithisml@iypan.in</a><br />
            Phone: <a href="tel:+91-7338881781">+91-7338881781</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
