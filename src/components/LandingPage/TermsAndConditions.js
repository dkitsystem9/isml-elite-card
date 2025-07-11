import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // Reuse CSS

function TermsAndConditions() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to section with offset (for sticky header, if any)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // Adjust this if you have a fixed/sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-main-content">
        {/* Sidebar */}
        <div className="privacy-policy-sidebar">
          <h3>Terms & Conditions</h3>
          <ul>
            {[
              ['acceptance', 'Acceptance of Terms'],
              ['eligibility', 'Eligibility'],
              ['obligations', 'User Obligations'],
              ['enrollment', 'Course Enrollment & Payments'],
              ['ip', 'Intellectual Property'],
              ['data', 'Data Collection & Use'],
              ['third-party', 'Third-Party Services'],
              ['liability', 'Limitation of Liability'],
              ['disclaimer', 'Disclaimer of Warranties'],
              ['termination', 'Termination'],
              ['modifications', 'Modifications to Terms'],
              ['law', 'Governing Law'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="privacy-policy-content">
          <h1>Terms & Conditions</h1>
          <p className="effective-date">Effective Date: October 2, 2024</p>

          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree,
            please discontinue use of the platform.
          </p>

          <h2 id="eligibility">2. Eligibility</h2>
          <p>
            You must be at least 18 years old or have the consent of a parent/guardian to access our services. By using
            our platform, you confirm your eligibility.
          </p>

          <h2 id="obligations">3. User Obligations</h2>
          <p>
            You agree to provide accurate information, use our platform legally, and protect your login credentials.
            Notify us immediately in case of unauthorized access.
          </p>

          <h2 id="enrollment">4. Course Enrollment & Payments</h2>
          <p>
            Course availability and fees are subject to change. Payments are securely processed through third-party
            providers. Refunds are governed by our Refund Policy.
          </p>

          <h2 id="ip">5. Intellectual Property</h2>
          <p>
            All content (text, videos, branding, materials) is the intellectual property of ISML or its partners.
            Unauthorized reproduction or distribution is prohibited.
          </p>

          <h2 id="data">6. Data Collection & Use</h2>
          <p>
            We collect personal and non-personal data as per our{' '}
            <a href="/privacy-policy">Privacy Policy</a>. By using our platform, you consent to data usage for service
            improvement and legal compliance.
          </p>

          <h2 id="third-party">7. Third-Party Services</h2>
          <p>
            We collaborate with secure third-party providers (e.g., payment gateways, email platforms). We are not
            liable for their independent privacy practices.
          </p>

          <h2 id="liability">8. Limitation of Liability</h2>
          <p>
            ISML is not liable for any indirect or consequential damages arising from service use, data breaches, or
            interruptions.
          </p>

          <h2 id="disclaimer">9. Disclaimer of Warranties</h2>
          <p>
            Our services are provided “as-is” without warranties. We do not guarantee uninterrupted access or accuracy
            of content.
          </p>

          <h2 id="termination">10. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account for violations of these Terms or misuse of
            services without prior notice.
          </p>

          <h2 id="modifications">11. Modifications to Terms</h2>
          <p>
            These Terms may be updated periodically. Your continued use after changes indicates your acceptance of the
            revised terms.
          </p>

          <h2 id="law">12. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India. Disputes will be handled in the courts of Chennai, Tamil
            Nadu.
          </p>

          <h2 id="contact">13. Contact</h2>
          <p>
            For questions or concerns, please contact:
            <br />
            <strong>Indian School for Modern Languages (ISML)</strong>
            <br />
            IYPAN Educational Centre Pvt. Ltd.
            <br />
            📧 <a href="mailto:learnwithisml@iypan.in">learnwithisml@iypan.in</a>
            <br />
            📞 <a href="tel:+91-7338881781">+91-7338881781</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
