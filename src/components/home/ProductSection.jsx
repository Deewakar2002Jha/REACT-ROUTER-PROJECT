import React from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";

// Featured products dummy data list
const featuredProducts = [
  {
    id: 1,
    name: "SonicPro Wireless Headphones",
    category: "Audio",
    price: "$249.99",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "UltraWatch Series X Smartwatch",
    category: "Wearables",
    price: "$319.00",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    tag: "New",
  },
  {
    id: 3,
    name: "Minimalist Mechanical Keyboard",
    category: "Accessories",
    price: "$149.50",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    tag: "Trending",
  },
  {
    id: 4,
    name: "Ergonomic Wireless Gaming Mouse",
    category: "Accessories",
    price: "$79.99",
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
  },
];

/**
 * Reusable Product Card Component
 */
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating">
          <Star size={15} fill="#f59e0b" color="#f59e0b" />
          <span>{product.rating}</span>
          <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>({product.reviews})</span>
        </div>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <button className="btn btn-primary add-cart-btn">
            <ShoppingCart size={15} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * ProductSection Component for Home Page
 */
const ProductSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Curated Catalog</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Explore our handpicked selection of top-performing gadgets designed for work and play.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/products" className="btn btn-secondary">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
