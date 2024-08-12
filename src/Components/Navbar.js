import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import navbarlogo from "../Assets/navbar-logo.png";
import { Container } from "@mui/material";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  return (
    <Container maxWidth="xl">
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img className="navbar-image1" src={navbarlogo} alt="NavbarLogo" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="/timeslots" className="navbar-links">
            Timeslots
          </a>
        </li>
        <li>
          <a href="/locateus" className="navbar-links">
            Locate Us
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/send/?phone=6590604833&text&type=phone_number&app_absent=0",
            "_blank"
          );
        }}
      >
        <FontAwesomeIcon icon={faCommentDots} /> &nbsp;Whatsapp
      </button>

      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>
        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="/timeslots">
              Timeslots
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/locateus">
              Locate Us
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
    </Container>
  );
}

export default Navbar;
