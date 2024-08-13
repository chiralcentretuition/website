import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import footerlogo from "../Assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <img className="ft-image1" src={footerlogo} alt="FooterLogo" />
            </p>
            <p className="ft-description">
            Unlock academic success with Chiral Centre - personalised tutoring, innovative learning, and expert guidance for A Level Chemistry excellence.
            </p>
          </div>
        </div>
        <div className="ft-list">
          <p className="ft-list-title">Sitemap</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href={"/#aboutus"}>About Us</a>
            </li>
            <li>
              <a href={"/#testimonials"}>Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="ft-list">
          <p className="ft-list-title">Class Size & Schedule</p>
          <ul className="ft-list-items">
            <li>
              <a href="/timeslots">1-to-1</a>
            </li>
            <li>
              <a href="/timeslots">Small Group (&#8804; 5 pax)</a>
            </li>
          </ul>
        </div>
        <div className="ft-list" id="contact">
          <p className="ft-list-title">Contact Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="https://wa.me/6590604833?text=Hi,%20I%20am%20interested%20in%20enrolling%20for%20the%20H1%2FH2%20Chemistry%20tuition%20and%20would%20like%20to%20inquire%20about%20available%20slots%20and%20enrollment%20process.%20Could%20you%20please%20provide%20more%20details%3F%20Thank%20you!" 
              target="_blank" 
              rel="noreferrer">
              <FontAwesomeIcon icon={faCommentDots} /> &nbsp;Whatsapp +65 90604833
              </a>
            </li>
            <li>
              <a href="mailto:chiralcentretuition@gmail.com">
              chiralcentretuition@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
