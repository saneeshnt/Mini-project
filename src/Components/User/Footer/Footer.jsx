import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Footer/Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer"> 
        <div className="container">
          <div className="row"> 
            <div className="col-md-3 col-sm-6">
              <h4>Support</h4>
              <ul className="list-unstyled"> 
                <li><Link to='/support'>FAQs</Link></li> 
                <li><Link to='#'>Shipping Information</Link></li> 
                <li><Link to='#'>Returns & Exchanges</Link></li>
                <li><Link to='#'>Customer Service</Link></li> 
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>About Us</h4>
              <ul className="list-unstyled"> 
                <li><Link to='#'>Our Story</Link></li> 
                <li><Link to='#'>Mission</Link></li> 
                <li><Link to='#'>Team</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>Phone: 123-456-7890</li>
                <li>Email: info@phonex.com</li>
                <li>Address: 123 Main St, City, Country</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Follow Us</h4>
              <ul className="list-unstyled"> 
                <li><Link to='#'>Facebook</Link></li> 
                <li><Link to='#'>Twitter</Link></li> 
                <li><Link to='#'>Instagram</Link></li>
                <li><Link to='#'>LinkedIn</Link></li> 
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
