import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // Reuse CSS

function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // Adjust for fixed header if present
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-main-content">
        <div className="privacy-policy-sidebar">
          <h3>Privacy Policy</h3>
          <ul>
            {[
              ['what-this-policy-covers', 'What this policy covers'],
              ['information-we-collect', 'Information We Collect'],
              ['legal-basis-processing', 'Legal Basis for Data Processing'],
              ['how-we-use-info', 'How We Use Your Information'],
              ['data-sharing', 'Data Sharing & Third-Party Disclosures'],
              ['international-transfers', 'International Data Transfers'],
              ['data-retention', 'Data Retention Policy'],
              ['your-rights', 'Your Rights Under GDPR & Indian Laws'],
              ['cookies', 'Cookies & Tracking Technologies'],
              ['data-security', 'Data Security Measures'],
              ['third-party-links', 'Third-Party Links'],
              ['changes-to-policy', 'Changes to This Privacy Policy'],
              ['contact-us', 'Contact Us'],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="privacy-policy-content">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective Date: October 2, 2024</p>

          <h2 id="what-this-policy-covers">What this policy covers</h2>
          <p>
            Your privacy is important to us, and so is being transparent about how we collect, use,
            and share information about you. This policy is intended to help you understand:
          </p>
          <ul className="privacy-policy-intro-links">
            <li><a href="#information-we-collect" onClick={(e) => { e.preventDefault(); scrollToSection('information-we-collect'); }}>What information we collect about you</a></li>
            <li><a href="#how-we-use-info" onClick={(e) => { e.preventDefault(); scrollToSection('how-we-use-info'); }}>How we use information we collect</a></li>
            <li><a href="#data-sharing" onClick={(e) => { e.preventDefault(); scrollToSection('data-sharing'); }}>How we disclose information</a></li>
            <li><a href="#data-security" onClick={(e) => { e.preventDefault(); scrollToSection('data-security'); }}>How we secure your data</a></li>
            <li><a href="#data-retention" onClick={(e) => { e.preventDefault(); scrollToSection('data-retention'); }}>How long we keep information</a></li>
            <li><a href="#your-rights" onClick={(e) => { e.preventDefault(); scrollToSection('your-rights'); }}>How to control your information</a></li>
          </ul>

          <h2 id="information-we-collect">1. Information We Collect</h2>
          <p>We may collect the following types of information when you use our website or services:</p>

          <h3>1.1 Personal Information</h3>
          <ul>
            <li>Full name, email address, phone number, and postal address</li>
            <li>Date of birth, gender, nationality, and education background</li>
            <li>Payment information (via third-party providers)</li>
            <li>Details you provide voluntarily (inquiries, forms, etc.)</li>
          </ul>

          <h3>1.2 Non-Personal Information</h3>
          <ul>
            <li>Browser type, device, OS</li>
            <li>IP address, geolocation (if enabled)</li>
            <li>Website behavior (pages viewed, time spent, etc.)</li>
          </ul>

          <h2 id="legal-basis-processing">2. Legal Basis for Data Processing</h2>
          <p>We process data under GDPR and India's DPDP Act based on:</p>
          <ul>
            <li><strong>Consent</strong> – User-submitted data voluntarily</li>
            <li><strong>Contract</strong> – For educational services</li>
            <li><strong>Legitimate Interests</strong> – Platform improvement</li>
            <li><strong>Legal Obligation</strong> – Compliance purposes</li>
          </ul>

          <h2 id="how-we-use-info">3. How We Use Your Information</h2>
          <p>Your data is used for:</p>
          <ul>
            <li>Processing enrollment and course delivery</li>
            <li>Sending alerts, updates, and communications</li>
            <li>Enhancing user experience and analytics</li>
            <li>Secure payment and fraud prevention</li>
            <li>Compliance with applicable laws</li>
          </ul>

          <h2 id="data-sharing">4. Data Sharing & Third-Party Disclosures</h2>
          <p>We may share data with:</p>
          <ul>
            <li>Payment providers, email/SMS services, analytics tools</li>
            <li>Accredited partners for certification or hiring</li>
            <li>Law enforcement if legally required</li>
          </ul>

          <h2 id="international-transfers">5. International Data Transfers</h2>
          <p>If data is transferred outside India/EEA:</p>
          <ul>
            <li>We apply Standard Contractual Clauses (SCCs)</li>
            <li>Ensure recipients follow strict data protections</li>
          </ul>

          <h2 id="data-retention">6. Data Retention Policy</h2>
          <ul>
            <li>Course data: 5 years post-completion</li>
            <li>Billing & payment: As required by law</li>
            <li>Marketing consent: Until withdrawal</li>
          </ul>
          <p>Data is securely deleted or anonymized after the retention period.</p>

          <h2 id="your-rights">7. Your Rights Under GDPR & Indian Laws</h2>
          <ul>
            <li>Access, correct, or delete your data</li>
            <li>Withdraw consent at any time</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability (structured format)</li>
            <li>Lodge a complaint with a regulator (DPA in EU or Indian DPBI)</li>
          </ul>

          <h2 id="cookies">8. Cookies & Tracking Technologies</h2>
          <p>We use cookies to analyze traffic and personalize content. You may disable cookies through browser settings.</p>

          <h2 id="data-security">9. Data Security Measures</h2>
          <ul>
            <li>End-to-end encryption</li>
            <li>Firewall-protected servers</li>
            <li>Role-based admin access</li>
            <li>Regular penetration testing</li>
          </ul>
          <p>No system is completely secure; use is at your own risk.</p>

          <h2 id="third-party-links">10. Third-Party Links</h2>
          <p>Our site may link to external websites. Please review their privacy policies before submitting any personal data.</p>

          <h2 id="changes-to-policy">11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy occasionally. Major changes will be posted with a notification on our site or via email.</p>

          <h2 id="contact-us">12. Contact Us</h2>
          <p>
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

export default PrivacyPolicy;
