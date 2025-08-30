// src/components/NavBar.jsx

import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink and alias it as Link
import "../css/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* This link should always go to the top of the homepage */}
                <Link smooth to="/#home">BakingSoc</Link>
            </div>
            <div className="navbar-links">
                {/* Use the HashLink component for all section links */}
                <Link smooth to="/#home" className="nav-link">Home</Link>
                <Link smooth to="/#committee" className="nav-link">Committee</Link>
                <Link smooth to="/#events" className="nav-link">Events</Link>
                <Link smooth to="/#recipes" className="nav-link">Recipes</Link>
                <Link smooth to="/#contribution" className="nav-link">Contribute a recipe</Link>
                <Link smooth to="/#feedback" className="nav-link">Feedback</Link>
            </div>
        </nav>
    );
}

export default NavBar;
