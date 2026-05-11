import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        TaskManager
      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/tasks">
            Tasks
          </Link>
        </li>

        <li>
          <button className="logout-btn">
            Logout
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;