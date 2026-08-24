import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

/**
 * Navbar Component
 * Displays the main site header with brand logo, navigation links, and mobile menu state.
 * Uses NavLink from react-router-dom to automatically add an active class for routing.
 */
const Navbar = () => {
  // State to handle mobile menu toggle state (open/closed)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <div className="brand-icon">
            <ShoppingBag size={22} />
          </div>
          <span>TechSphere</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Button & Mobile Toggle Button */}
        <div className="nav-actions">
          <Link to="/products" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}>
            Shop Now <ArrowRight size={16} />
          </Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;