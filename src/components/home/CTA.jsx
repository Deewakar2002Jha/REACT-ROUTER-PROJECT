import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";

/**
 * CTA (Call To Action) Component
 * Encapsulated banner with high-contrast gradient styling encouraging product discovery.
 */
const CTA = () => {
  return (
    <section className="container">
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Upgrade Your Tech Setup?</h2>
          <p className="cta-description">
            Explore our full catalog today and enjoy exclusive discounts on wireless headphones, smart watches, and workspace accessories.
          </p>
          <Link to="/products" className="btn btn-primary" style={{ backgroundColor: "#ffffff", color: "#0f172a" }}>
            <ShoppingBag size={18} /> Browse Full Collection <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
