import React from "react";
import { Truck, ShieldCheck, CreditCard, Headphones, RefreshCw } from "lucide-react";

// Feature items array
const featureList = [
  {
    id: 1,
    icon: <Truck size={28} />,
    title: "Express Fast Delivery",
    description: "Free nationwide shipping on orders over $50 with real-time tracking updates.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={28} />,
    title: "Premium Quality Guarantee",
    description: "Every product is rigorously tested to ensure authentic quality and performance.",
  },
  {
    id: 3,
    icon: <CreditCard size={28} />,
    title: "Secure Payment System",
    description: "100% encrypted transactions supporting major cards, PayPal, and Apple Pay.",
  },
  {
    id: 4,
    icon: <Headphones size={28} />,
    title: "24/7 Expert Support",
    description: "Our dedicated support team is available round-the-clock to assist your inquiries.",
  },
];

/**
 * Features Section Component
 * Displays grid of core benefit cards with icons.
 */
const Features = () => {
  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">Built For Seamless Shopping</h2>
          <p className="section-subtitle">
            We prioritize customer satisfaction through reliable service, fast fulfillment, and top security.
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
