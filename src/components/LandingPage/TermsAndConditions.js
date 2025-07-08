import React from 'react';
import './PrivacyPolicy.css'; // Reusing same CSS for layout

function TermsAndConditions() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-main-content">
        <div className="privacy-policy-sidebar">
          <h3>Terms & Conditions</h3>
          <ul>
            <li><a href="#acceptance" onClick={(e) => { e.preventDefault(); scrollToSection('acceptance'); }}>Acceptance of Terms</a></li>
            <li><a href="#eligibility" onClick={(e) => { e.preventDefault(); scrollToSection('eligibility'); }}>Eligibility</a></li>
            <li><a href="#obligations" onClick={(e) => { e.preventDefault(); scrollToSection('obligations'); }}>User Obligations</a></li>
            <li><a href="#enrollment" onClick={(e) => { e.preventDefault(); scrollToSection('enrollment'); }}>Course Enrollment & Payments</a></li>
            <li><a href="#ip" onClick={(e) => { e.preventDefault(); scrollToSection('ip'); }}>Intellectual Property</a></li>
            <li><a href="#data" onClick={(e) => { e.preventDefault(); scrollToSection('data'); }}>Data Collection & Use</a></li>
            <li><a href="#third-party" onClick={(e) => { e.preventDefault(); scrollToSection('third-party'); }}>Third-Party Services</a></li>
            <li><a href="#liability" onClick={(e) => { e.preventDefault(); scrollToSection('liability'); }}>Limitation of Liability</a></li>
            <li><a href="#disclaimer" onClick={(e) => { e.preventDefault(); scrollToSection('disclaimer'); }}>Disclaimer of Warranties</a></li>
            <li><a href="#termination" onClick={(e) => { e.preventDefault(); scrollToSection('termination'); }}>Termination</a></li>
            <li><a href="#modifications" onClick={(e) => { e.preventDefault(); scrollToSection('modifications'); }}>Modifications to Terms</a></li>
            <li><a href="#law" onClick={(e) => { e.preventDefault(); scrollToSection('law'); }}>Governing Law</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <div className="privacy-policy-content">
          <h1>Terms & Conditions</h1>
          <p className="effective-date">Effective Date: October 2, 2024</p>

          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the platform.
          </p>

          <h2 id="eligibility">2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have the consent of a parent/guardian to access our services. By using our platform, you confirm your eligibility.
          </p>

          <h2 id="obligations">3. User Obligations</h2>
          <p>
            You agree to provide accurate information, use our platform legally, and protect your login credentials. Notify us immediately in case of unauthorized access.
          </p>

          <h2 id="enrollment">4. Course Enrollment & Payments</h2>
          <p>
            Course availability and fees are subject to change. Payments are securely processed through third-party providers. Refunds are governed by our Refund Policy.
          </p>

          <h2 id="ip">5. Intellectual Property</h2>
          <p>
            All content (text, videos, branding, materials) is the intellectual property of ISML or its partners. Unauthorized reproduction or distribution is prohibited.
          </p>

          <h2 id="data">6. Data Collection & Use</h2>
          <p>
            We collect personal and non-personal data as per our <a href="/privacy-policy">Privacy Policy</a>. By using our platform, you consent to data usage for service improvement and legal compliance.
          </p>

          <h2 id="third-party">7. Third-Party Services</h2>
          <p>
            We collaborate with secure third-party providers (e.g., payment gateways, email platforms). We are not liable for their independent privacy practices.
          </p>

          <h2 id="liability">8. Limitation of Liability</h2>
          <p>
            ISML is not liable for any indirect or consequential damages arising from service use, data breaches, or interruptions.
          </p>

          <h2 id="disclaimer">9. Disclaimer of Warranties</h2>
          <p>
            Our services are provided “as-is” without warranties. We do not guarantee uninterrupted access or accuracy of content.
          </p>

          <h2 id="termination">10. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account for violations of these Terms or misuse of services without prior notice.
          </p>

          <h2 id="modifications">11. Modifications to Terms</h2>
          <p>
            These Terms may be updated periodically. Your continued use after changes indicates your acceptance of the revised terms.
          </p>

          <h2 id="law">12. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India. Disputes will be handled in the courts of Chennai, Tamil Nadu.
          </p>

          <h2 id="contact">13. Contact</h2>
          <p>
            For questions or concerns, please contact:<br />
            <strong>Indian School for Modern Languages (ISML)</strong><br />
            IYPAN Educational Centre Pvt. Ltd.<br />
            📧 <a href="mailto:learnwithisml@iypan.in">learnwithisml@iypan.in</a><br />
            📞 <a href="tel:+91-7338881781">+91-7338881781</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
