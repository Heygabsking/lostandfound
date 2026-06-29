import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.avif"; // make sure image is in assets folder
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(); // ✅ must be inside component
  const username = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("token"); // remove token
    navigate("/login"); // redirect
    
  }
  return (
  <nav className="navigationBar">

    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>

    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </div>

    {/* ✅ RIGHT SIDE (USERNAME + LOGOUT) */}
    <div className="nav-right">
      {username && (
        <span className="user-name">Welcome, {username}</span>
      )}

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>

  </nav>
);
}