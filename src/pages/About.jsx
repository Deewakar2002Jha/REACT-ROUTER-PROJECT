import React from "react";
import { Award, Users, Globe2, ShieldCheck } from "lucide-react";

/**
 * About Page Component
 * Showcases company story, mission statement, values, and key achievements.
 */
const About = () => {
  return (
    <div className="about-page">
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <h1>About TechSphere</h1>
          <p>We craft modern hardware experiences for creators, professionals, and technology enthusiasts.</p>
        </div>
      </div>

      <div className="container section-padding">
        {/* Story Section */}
        <div className="about-story">
          <div className="story-content">
            <span className="section-badge">Our Journey</span>
            <h2>Designing the Future of Personal Tech</h2>
            <p>
              Started in 2024 by a passionate team of designers and engineers, TechSphere began with a vision: bringing premium quality electronics directly to customers without compromise.
            </p>
            <p>
              Today, we serve over 50,000 satisfied tech lovers across 30+ countries. Every item in our store is carefully tested for reliability, ergonomics, and seamless design integration.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="TechSphere Team"
              style={{ borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            />
          </div>
        </div>

        {/* Company Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>50K+</h3>
            <p>Global Customers</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Quality Guarantee</p>
          </div>
          <div className="stat-card">
            <h3>4.9 ★</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;