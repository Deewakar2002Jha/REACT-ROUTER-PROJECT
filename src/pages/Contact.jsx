import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

/**
 * Contact Page Component
 * Allows users to submit inquiries and view company contact details.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after submit demonstration
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Have questions about our products or your order? We are here to help!</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-grid">
          {/* Left Column: Contact Information */}
          <div className="contact-info">
            <div>
              <span className="section-badge">Reach Out</span>
              <h2 className="section-title">Contact Details</h2>
              <p style={{ color: "#64748b", marginBottom: "2rem" }}>
                Reach out through any of our channels below. Our support team responds within 24 hours.
              </p>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={22} />
              </div>
              <div className="info-details">
                <h4>Email Us</h4>
                <p>support@techsphere.com</p>
                <p>sales@techsphere.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div className="info-details">
                <h4>Call Us</h4>
                <p>+1 (800) 555-8324</p>
                <p>Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div className="info-details">
                <h4>Headquarters</h4>
                <p>750 Tech Boulevard, Suite 400</p>
                <p>San Francisco, CA 94107</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={22} />
              </div>
              <div className="info-details">
                <h4>Support Hours</h4>
                <p>Monday - Saturday: 24/7 Chat Available</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem" }}>Send Us a Message</h3>

            {submitted && (
              <div className="alert-success">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;