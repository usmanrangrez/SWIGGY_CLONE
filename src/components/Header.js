import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src={LOGO_URL} />
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
          <li onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? (
              <NavLink className="login">Logout</NavLink>
            ) : (
              <NavLink className="login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
