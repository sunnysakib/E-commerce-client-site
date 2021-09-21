import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Asset/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./Header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/login" className="option">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
