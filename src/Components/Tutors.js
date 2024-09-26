import React from "react";
import "../Styles/Tutors.css";
import { Container } from "@mui/material";

function Tutors() {
  return (
    <Container maxWidth="xl">
    <div className="tutor-section" id="tutors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>About Our Tutor</span>
        </h3>

        <div className="dt-description">
          <p>
            Cheng Mun is an accomplished H1/H2 Chemistry tutor who has a passion for excellence. 
            <br/>
          </p>
          <ul>
            <li>Specialised in teaching <span style={{ fontWeight: 'bold' }}>JC Chemistry</span>, with <span style={{ fontWeight: 'bold' }}>past students from all JCs</span></li>
            <li>Graduated from NTU with a <span style={{ fontWeight: 'bold' }}>Bachelor's in Chemical Engineering (Hons)</span></li>
          </ul>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Tutors;
