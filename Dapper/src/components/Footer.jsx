import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/collections/men">Mens Collection</Link></li>
              <li><Link to="/collections/women">Womens Collection</Link></li>
              <li><Link to="/super-deals">Sales & Offers</Link></li>
              <li><Link to="/collections/accessories">Accessories</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/shipping">Shipping & Delivery</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Care</h3>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
              <li><Link to="/track-order">Track Your Order</Link></li>
              <li><Link to="/payment-options">Payment Options</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          <div className="footer-column newsletter">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="payment-methods">
            <img src="https://via.placeholder.com/50x30" alt="Visa" />
            <img src="https://via.placeholder.com/50x30" alt="MasterCard" />
            <img src="https://via.placeholder.com/50x30" alt="PayPal" />
            <img src="https://via.placeholder.com/50x30" alt="American Express" />
          </div>
          <p>&copy; {new Date().getFullYear()} Calista Clothing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer