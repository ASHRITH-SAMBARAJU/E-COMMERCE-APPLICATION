import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import "./Footer.css";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h2>Zestora </h2>
            <p>Discover elegance with our expertly curated collection of luxury essentials.</p>
            <div className="social-icons">
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://twitter.com" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/shop/fashion">Fashion</Link></li>
              <li><Link to="/shop/beauty">Beauty</Link></li>
              <li><Link to="/shop/accessories">Accessories</Link></li>
              <li><Link to="/shop/wellness">Wellness</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@timelesscuration.com">support@Zestora.com</a></li>
              <li>Phone: +91 90000 90000</li>
              <li>007 Heritage Street, Suite 10,<br />Banjara Hills, Hyderabad, Telangana 500034</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Zestora. All rights reserved.</p>
          {/* <div className="payment-icons">
<img src="/images/visa.jpg" alt="Visa" />
<img src="/images/mastercard.jpg" alt="Mastercard" />
<img src="/images/paypal.jpg" alt="PayPal" />
<img src="/images/applepay.jpg" alt="Apple Pay" />

</div> */}


        </div>
      </div>
    </footer>
  );
};

export default Footer;