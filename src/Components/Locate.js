import React from "react";
import "../Styles/Tutors.css";
import { Container } from "@mui/material";

function Locate() {
  return (
    <Container maxWidth="xl">
    <div className="tutor-section" id="tutors">
        <h3 className="dt-title">
          <span>Locate Us</span>
        </h3>
        <p className="dt-description">
        For 1-to-1 tuition, opt between Farrer Park home tuition or at the comfort of your own home.
        <br/>For small groups, it will be held at 212C Bidadari Park Dr (refer to map below).
        </p>
    </div>
    </Container>
  );
}

export default Locate;
