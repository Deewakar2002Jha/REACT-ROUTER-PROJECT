import React, { useState } from "react";
import { Search, Star, ShoppingCart, Filter } from "lucide-react";

// Products dataset
const allProducts = [
  {
    id: 1,
    name: "SonicPro Wireless Headphones",
    category: "Audio",
    price: 249.99,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "UltraWatch Series X Smartwatch",
    category: "Wearables",
    price: 319.00,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    tag: "New",
  },
  {
    id: 3,
    name: "Minimalist Mechanical Keyboard",
    category: "Accessories",
    price: 149.50,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    tag: "Trending",
  },
  {
    id: 4,
    name: "Ergonomic Wireless Gaming Mouse",
    category: "Accessories",
    price: 79.99,
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Noise-Cancelling Earbuds Pro",
    category: "Audio",
    price: 189.99,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    tag: "Top Rated",
  },
  {
    id: 6,
    name: "Smart Fitness Tracker Band",
    category: "Wearables",
    price: 99.00,
    rating: 4.5,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    tag: "Sale",
  },
];

/**
 * Products Page Component
 * Dedicated page containing catalog search, category filtering, and product grid.
 */
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on active category and search input term
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <h1>Our Tech Collection</h1>
          <p>Explore our complete range of innovative, high-performance electronics.</p>
        </div>
      </div>

      <div className="container section-padding">
        {/* Search & Filter Bar */}
        <div className="filter-bar">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search products by name..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-chips">
            {["All", "Audio", "Wearables", "Accessories"].map((cat) => (
              <button
                key={cat}
                className={`chip ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-content">
                  <span style={{ fontSize: "0.8rem", color: "#6366f1", fontWeight: "600", textTransform: "uppercase" }}>
                    {product.category}
                  </span>
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-rating">
                    <Star size={15} fill="#f59e0b" color="#f59e0b" />
                    <span>{product.rating}</span>
                    <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>({product.reviews})</span>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button className="btn btn-primary add-cart-btn">
                      <ShoppingCart size={15} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0" }}>
            <h3 style={{ color: "#64748b", marginBottom: "0.5rem" }}>No products found</h3>
            <p style={{ color: "#94a3b8" }}>Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
