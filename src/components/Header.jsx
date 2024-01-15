import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import searchIcon from "../images/search.svg";
import shoppingBagIcon from "../images/shopping-bag.svg";
import userIcon from "../images/user.svg";
import spaLogo from "../images/spaLogo.png";

export default function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img src={spaLogo} alt="" />
        <span> Luxe Animal Spa</span>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/spa-services">Spa Services</Link>
          </li>
          <li>
            <Link to="/book-appointment">Book Appointment</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="actions">
        <img src={searchIcon} alt="" />
        <img src={shoppingBagIcon} alt="" />
        <img src={userIcon} alt="" />
      </div>
    </div>
  );
}
