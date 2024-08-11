import React, { useEffect, useState } from "react";
import Tutor from "../Assets/tutor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";
import { Box } from "@mui/material";
import Favicon from "../Assets/favicon-dark.png";

function Hero() {

  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <Box>
        <div className="text-section">
          <p className="text-headline"><img className="hero-image2" src={Favicon} alt="Favicon"/>Chiral Centre Home Tuition</p>
          <h2 className="text-title">
            Chemistry Tuition for Junior College Students
          </h2>
          <br/>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={() => {
              window.open(
                "https://wa.me/6590604833?text=Hi,%20I%20am%20interested%20in%20enrolling%20for%20the%20H1%2FH2%20Chemistry%20tuition%20and%20would%20like%20to%20inquire%20about%20available%20slots%20and%20enrollment%20process.%20Could%20you%20please%20provide%20more%20details%3F%20Thank%20you!",
                "_blank"
              );
            }}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> &nbsp;Enquire for Slots
          </button>
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
              <p>8+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        </Box>

        <div className="hero-image-section">
          <img className="hero-image1" src={Tutor} alt="Tutor" />
        </div>
        <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      </div>
    </div>
  );
}

export default Hero;
