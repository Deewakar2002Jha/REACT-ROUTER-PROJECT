import React from "react";
import Hero from "../components/home/Hero";
import ProductSection from "../components/home/ProductSection";
import Features from "../components/home/Features";
import AboutSection from "../components/home/AboutSection";
import CTA from "../components/home/CTA";

/**
 * Home Page Component
 * Combines all modular section components into a single landing page experience.
 */
const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ProductSection />
      <Features />
      <AboutSection />
      <CTA />
    </div>
  );
};

export default Home;