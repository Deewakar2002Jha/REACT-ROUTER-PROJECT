import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Globe, Share2, MessageSquare, Mail, Send } from "lucide-react";

/**
 * Footer Component
 * Displayed at the bottom of every page.
 * Includes logo, brief info, quick page links, newsletter form, and copyright.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand">
            <div className="nav-brand" style={{ color: "#ffffff", marginBottom: "1rem" }}>
              <div className="brand-icon">
                <ShoppingBag size={22} />
              </div>
              <span>TechSphere</span>
            </div>
            <p>
              Your premium destination for modern gadgets and high-performance electronic gear. Quality design meets cutting-edge innovation.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Share">
                <Share2 size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Community">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="footer-column">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products">Audio & Headphones</Link></li>
              <li><Link to="/products">Smart Wearables</Link></li>
              <li><Link to="/products">Laptops & Workstations</Link></li>
              <li><Link to="/products">Accessories</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginBottom: "1rem" }}>
              Subscribe to receive updates on new product launches and special offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="btn btn-primary" style={{ padding: "0.75rem" }}>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TechSphere Inc. All rights reserved. Built with React & React Router DOM.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;