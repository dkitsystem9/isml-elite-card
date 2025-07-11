import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import card1 from "../../assets/ISML-Card1.png";
import card2 from "../../assets/ISML-Card2.png";
import card3 from "../../assets/ISML-Card3.png";
import DiscountTable from "./DiscountTable";
import AccordionFAQ from "./AccordionFAQ";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "ISML Elite EduPass",
    price: "₹49",
    original: "₹199",
    image: card1,
    features: [
      "1 Year Validity",
      "Any 1 Language",
      "Online Mode",
      "10% Course Discount",
    ],
    button: "Get EduPass",
    link: "https://rzp.io/rzp/edupass",
    color: "blue",
  },
  {
    title: "ISML Elite ScholarPass",
    price: "₹99",
    original: "₹499",
    image: card2,
    features: [
      "2 Years Validity",
      "3 Languages",
      "Online + Offline",
      "Up to 12% Discount",
      "Study Abroad Guidance",
    ],
    button: "Get ScholarPass",
    highlight: true,
    link: "https://rzp.io/rzp/scholarpass",
    color: "green",
  },
  {
    title: "ISML Elite InfinityPass",
    price: "₹199",
    original: "₹999",
    image: card3,
    features: [
      "3 Years Validity",
      "All Languages",
      "Online + Offline",
      "Up to 15% Discount",
      "3-Month Internship",
      "Priority Placement",
    ],
    button: "Get InfinityPass",
    link: "https://rzp.io/rzp/infinitypass",
    color: "red",
  },
];

const LandingPage = () => {
  const [rotations, setRotations] = useState(plans.map(() => 0));

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const handleHover = (index) => {
    setRotations((prevRotations) => {
      const updated = [...prevRotations];
      updated[index] += 360;
      return updated;
    });
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-flex">
        <div className="logo-box">
          <img src={logo} alt="ISML Logo" className="hero-logo" />
        </div>
        <div className="hero-text-box">
          <motion.h1
            className="hero-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Unleash your Language learning journey with exclusive perks through
            the ISML Elite Card.
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Choose your pass. Start learning smarter, faster and more
            affordably.
          </motion.p>
        </div>
      </section>

      {/* Plan Cards Section */}
      <section className="plans-section">
        <div className="plan-card-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`plan-card card-hover-${plan.color} ${
                plan.highlight ? "highlight-card" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
            >
              {plan.highlight && (
                <div className="popular-badge">★ Most ★ Popular</div>
              )}

              <motion.div
                animate={{ rotateY: rotations[index] }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="card-image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "14px",
                    marginBottom: "1rem",
                    objectFit: "cover",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                />
              </motion.div>

              <div className="plan-content">
                <div className="plan-header-fixed">
                  <h2>{plan.price}</h2>
                  <h3>{plan.title}</h3>
                  <p className="original-price">Original: {plan.original}</p>
                </div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                className="plan-button"
                onClick={() => handleRedirect(plan.link)}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Discount Table */}
      <DiscountTable />

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <AccordionFAQ />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} ISML. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
