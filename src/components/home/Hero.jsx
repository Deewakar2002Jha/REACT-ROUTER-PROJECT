import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

/**
 * Hero Section Component
 * Modern banner with headline, call-to-action buttons, key statistics, and visual card graphic.
 */
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <span className="section-badge">
              <Sparkles size={14} style={{ display: "inline", marginRight: "6px" }} /> Next-Gen Technology
            </span>
            <h1 className="hero-title">
              Elevate Your Setup with <span>Premium Tech</span>
            </h1>
            <p className="hero-description">
              Discover cutting-edge audio, smart wearables, and sleek accessories engineered to boost your productivity and lifestyle experience.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="hero-stats">
              <div className="stat-item">
                <h4>50k+</h4>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h4>99.4%</h4>
                <p>Satisfaction Rate</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Customer Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                alt="Premium Wireless Headphones"
                className="hero-img"
              />
              <div className="floating-badge">
                <div className="floating-badge-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: "0.95rem", fontWeight: "700", margin: 0 }}>Top Rated Gear</h5>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>Award Winning Design 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
