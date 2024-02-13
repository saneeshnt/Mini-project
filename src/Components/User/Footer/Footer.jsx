import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div> <footer className="footer">
    <div className="footerContent">
      <div className="footerColumn">
        <h3>About Us</h3>
        <p>Learn more about phoen!X and our mission.</p>
      </div>
      <div className="footerColumn">
        <h3>Contact Us</h3>
        <p>Email: contact@phoenx.com</p>
      </div>
      <div className="footerColumn">
        <h3>Follow Us</h3>
        <p>Stay connected on social media.</p>
        <div className="socialIcons">
        </div>
      </div>
    </div>
    <div className="footerBottom">
      <p>&copy; 2024 phoen!X. All rights reserved.</p>
    </div>
  </footer></div>
  )
}

export default Footer