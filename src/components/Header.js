import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useUserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { loggedInUser, setLoggedInUser } = useUserContext();

  const cartItems = useSelector((store) => store.cart.items);
  //Authentication Code
  useEffect(() => {
    //Make API call and send username and pass
    // imagine we got this

    setLoggedInUser("Usmaan");
  }, []);
  useEffect(() => {
    //Make API call and send username and pass
    // imagine we got this

    setLoggedInUser("Usmaan");
  }, []);

  return (
    <nav className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </Link>
      {loggedInUser && (
        <div className="text-2xl font-bold "> Welcome,{loggedInUser || ""}</div>
      )}
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
          <li onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? (
              <button className="logout">Logout</button>
            ) : (
              <button className="login">Login</button>
            )}
          </li>
          <li className="online-header">
            {isOnline ? <NavLink>✅</NavLink> : <NavLink>🔴</NavLink>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
