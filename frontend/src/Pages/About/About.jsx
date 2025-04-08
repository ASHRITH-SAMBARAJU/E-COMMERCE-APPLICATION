import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Zestora</h1>
        <p>
          Welcome to <strong>Zestora</strong> — where style meets simplicity. 
          We're passionate about delivering quality fashion that fits your lifestyle.
        </p>
        <p>
          Founded in 2025, Zestora began as a small vision to make timeless fashion accessible for everyone. 
          Thanks to our incredible community, we’ve grown into a brand that celebrates individuality, confidence, and comfort.
        </p>
        <p>
          From everyday essentials to standout pieces, we curate every collection with love and intention. 
          Our mission is to bring you closer to your personal style while keeping things effortless.
        </p>
        <p>
          Thank you for being a part of the Zestora journey. Your trust fuels everything we do.
        </p>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with new arrivals, style tips, and exclusive offers — straight to your inbox.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default About;
