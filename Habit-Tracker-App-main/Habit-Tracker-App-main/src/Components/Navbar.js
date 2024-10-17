import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Custom CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Brand Name */}
        <Link to="/" className="navbar-logo">
          <h2>Health-Tracker</h2>
        </Link>

        {/* Add Habits Button */}
        <form action="" className="navbar-form">
          <Link to="/add-habit" className="navbar-button">
            Add Habits
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
