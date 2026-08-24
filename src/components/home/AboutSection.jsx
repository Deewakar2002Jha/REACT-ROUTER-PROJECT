import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * AboutSection Component for Home Page
 * Provides a teaser of company background with button navigating to full About page.
 */
const AboutSection = () => {
  return (
    <section className="about-teaser-section section-padding">
      <div className="container">
        <div className="about-teaser-grid">
          {/* Left Column: Image Card */}
          <div className="about-teaser-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team at TechSphere"
              className="about-teaser-image"
            />
          </div>

          {/* Right Column: Information & Navigation */}
          <div className="about-content">
            <span className="section-badge">Our Mission</span>
            <h2 className="section-title">Innovating How You Experience Electronics</h2>
            <p style={{ color: "#64748b", fontSize: "1.05rem", marginBottom: "1rem" }}>
              Founded in 2024, TechSphere was built on a simple promise: providing technology lovers with carefully selected, authentic gadgets that redefine speed, design, and user enjoyment.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" /> 100% Certified Tech
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" /> Eco-Friendly Packaging
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" /> Hassle-Free Returns
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" /> Global Warranty Coverage
              </div>
            </div>

            <Link to="/about" className="btn btn-primary">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
