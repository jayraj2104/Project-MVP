import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

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
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
