import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Shared Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Page Components
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

/**
 * Main App Component
 * Sets up client-side routing with React Router DOM.
 * Navbar and Footer wrap around the Routes component to remain persistent on all pages.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Persistent Top Header Navigation */}
      <Navbar />

      {/* Main Dynamic View Content area based on current URL path */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Persistent Bottom Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;