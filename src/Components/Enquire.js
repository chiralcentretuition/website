import React from "react";
import "../Styles/Tutors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";

function Enquire() {
  return (
    <Container maxWidth="xl">
    <div className="tutor-section" id="tutors">
      <div className="dt-title-content">
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
            <FontAwesomeIcon icon={faCalendarCheck} /> &nbsp;Enquire for Slots Now!
          </button>
      </div>
    </div>
    </Container>
  );
}

export default Enquire;
