import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline"; // Custom hook to check online status
import { useSelector } from "react-redux"; // To access cart items count
import { useAuth } from "../utils/AuthContext"; // Custom hook for auth context

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Accessing global auth state
  const isOnline = useOnline(); // Online status
  const cartItems = useSelector((store) => store.cart.items); // Cart items from Redux store
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handles the logout process
  const handleLogout = () => {
    setIsLoggedIn(false); // Update auth state globally
    localStorage.removeItem("userDetailsSwiggy"); // Optional: Clear persisted login state
    navigate("/login"); // Redirect to login page
  };
  return (
    <nav className="header">
      <Link to="/" className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="logout">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button to="/login" className="login">
                Login
              </button>
            </li>
          )}
          <li className="online-status">
            {isOnline ? "✅ Online" : "🔴 Offline"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
