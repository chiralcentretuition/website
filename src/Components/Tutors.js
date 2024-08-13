import React from "react";
import "../Styles/Tutors.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";

function Tutors() {
  return (
    <Container maxWidth="xl">
    <div className="tutor-section" id="tutors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>About Our Tutor</span>
        </h3>

        <p className="dt-description">
        Cheng Mun is an accomplished H1/H2 Chemistry tutor who has a passion for excellence. 
        <br/>With <span style={{ fontWeight: 'bold' }}>personalised attention in a 1-to-1 or small group setting</span>, 
        she employs innovative teaching strategies to <span style={{ fontWeight: 'bold' }}>simplify complex concepts</span>. 
        <br/>Beyond academics, she fosters a genuine interest in Chemistry, 
        guiding students to success in their A Level examinations.
        </p>
        {/* <button
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
        </button> */}
      </div>
    </div>
    </Container>
  );
}

export default Tutors;
