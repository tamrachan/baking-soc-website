import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">BakingSoc</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/committee" className="nav-link">Meet the Committee!</Link>
            <Link to="/recipes" className="nav-link">Recipes</Link>
            <Link to="/contribution" className="nav-link">Contribute a recipe :)</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/feedback" className="nav-link">Feedback</Link>
        </div>
    </nav>
}

export default NavBar;