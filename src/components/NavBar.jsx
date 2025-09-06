import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "../css/NavBar.css";

function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    // This function will be called when a link is clicked, closing the menu
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link smooth to="/#home" onClick={handleLinkClick}>BakingSoc</Link>
            </div>

            {/* The hamburger menu button, visible only on mobile */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
            </button>

            {/* Add the 'open' class when the menu is active */}
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link smooth to="/#home" className="nav-link" onClick={handleLinkClick}>Home</Link>
                <Link smooth to="/#committee" className="nav-link" onClick={handleLinkClick}>Committee</Link>
                <Link smooth to="/#events" className="nav-link" onClick={handleLinkClick}>Events</Link>
                <Link smooth to="/#recipes" className="nav-link" onClick={handleLinkClick}>Recipes</Link>
                <Link smooth to="/#get-in-touch" className="nav-link" onClick={handleLinkClick}>Get in Touch</Link>
                {/* <Link smooth to="/#contribution" className="nav-link" onClick={handleLinkClick}>Contribute</Link>
                <Link smooth to="/#feedback" className="nav-link" onClick={handleLinkClick}>Feedback</Link> */}
            </div>
        </nav>
    );
}

export default NavBar;
