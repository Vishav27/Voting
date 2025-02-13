import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [userRole, setUserRole] = useState(null); // Store user role
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole"); // Clear role on logout
    setUserRole(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🗳️ Everyone Votes</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

        {/* Show Dashboard links only if the user is logged in */}
        {userRole === "voter" && <li><Link to="/voter-dashboard">Voter Dashboard</Link></li>}
        {userRole === "officer" && <li><Link to="/officer-dashboard">Officer Dashboard</Link></li>}
      </ul>

      {/* Show Login if not logged in, otherwise show Logout */}
      {userRole ? (
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      ) : (
        <Link to="/login" className="login-btn">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
