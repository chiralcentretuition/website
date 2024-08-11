import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import footerlogo from "../Assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {

  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <img className="hero-image1" src={footerlogo} alt="FooterLogo" />
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
              <a href={"#aboutus"}>About Us</a>
            </li>
            <li>
              <a href={"#testimonials"}>Testimonials</a>
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
              target="_blank">
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

      {/* <div className="ft-copyright">
        <p>© 2017-{currentYear} Chiral Centre Tuition. All rights reserved.</p>

        {/* <ul className="ft-social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/cheng-mun-ng-001/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
        </ul> 
      </div> */}
    </div>
  );
}

export default Footer;
