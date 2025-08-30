import React from 'react';
import '../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.instagram.com/standrewsbakingsoc" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:bakingsoc@st-andrews.ac.uk">
            bakingsoc@st-andrews.ac.uk
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} St Andrews Baking Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
