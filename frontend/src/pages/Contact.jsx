import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p className="subtitle">Get in touch with our team</p>
      </section>

      <section className="contact-container">
        <div className="contact-form-section">
          <h2>Send us a Message</h2>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully. We'll contact you soon.
            </div>
          )}

          {error && (
            <div className="error-message">
              ✗ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Contact Information</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Agricultural Innovation Hub<br/>Research & Development Center<br/>Precision Farming Division</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p><a href="mailto:info@farmio.com">info@farmio.com</a></p>
          </div>

          <div className="info-box">
            <h3>🕐 Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
          </div>

          <div className="info-box">
            <h3>🌐 Follow Us</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How does FarmIO help reduce costs?</h4>
            <p>Our precision farming approach optimizes water and chemical usage, reducing input costs by up to 40% while improving yields.</p>
          </div>
          <div className="faq-item">
            <h4>Is the system suitable for small farms?</h4>
            <p>Yes! FarmIO is designed to be scalable and cost-effective for small and medium-scale farmers.</p>
          </div>
          <div className="faq-item">
            <h4>How are sensors installed?</h4>
            <p>Our team provides professional installation and training. Setup typically takes 1-2 days per farm.</p>
          </div>
          <div className="faq-item">
            <h4>What kind of support do you provide?</h4>
            <p>We offer 24/7 technical support, regular maintenance, data analysis, and farmer training programs.</p>
          </div>
          <div className="faq-item">
            <h4>Can I integrate existing equipment?</h4>
            <p>Yes, our system is designed to work with existing farm infrastructure and can be customized to your needs.</p>
          </div>
          <div className="faq-item">
            <h4>What is the expected ROI?</h4>
            <p>Most farmers see positive ROI within 18-24 months through reduced costs and improved yields.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Farm?</h2>
        <p>Join hundreds of farmers already benefiting from precision agriculture</p>
        <button className="btn btn-primary btn-large">Schedule a Demo</button>
      </section>
    </div>
  );
}

export default Contact;

