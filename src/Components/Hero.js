import React from "react";
import Tutor from "../Assets/tutor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Hero.css";
import { Box } from "@mui/material";

function Hero() {

  const yearsSince2015 = new Date().getFullYear() - 2015;

  return (
    <div className="section-container">
      <div className="hero-section">
        <Box>
          <div className="text-section">
            <h2 className="text-title">
              Chemistry Tuition for Junior College Students
            </h2>
            <br />
            <div className="text-stats">
              <div className="text-stats-container">
                <p>100%</p>
                <p>Qualify for Local Unis</p>
              </div>

              <div className="text-stats-container">
                <p>100%</p>
                <p>Grade Improvement</p>
              </div>

              <div className="text-stats-container">
                <p>{yearsSince2015}+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </Box>
        <div className="hero-image-section">
          <img className="hero-image1" src={Tutor} alt="Tutor" />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://wa.me/6590604833?text=Hi,%20I%20am%20interested%20in%20enrolling%20for%20the%20H1%2FH2%20Chemistry%20tuition%20and%20would%20like%20to%20inquire%20about%20the%20enrollment%20process.%0AClass%20Type:%201-1%20/%20Small%20Group%0ATimeslot:%0AYear:%20J1%20/%20J2%0ALevel:%20H1%20/%20H2%0ASchool:%20",
              "_blank"
            );
          }}
          className="whatsapp-button"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
