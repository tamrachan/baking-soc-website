import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">BakingSoc</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/recipes" className="nav-link">Recipes</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/feedback" className="nav-link">Feedback</Link>
        </div>
    </nav>
}

export default NavBar;