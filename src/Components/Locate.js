import React from "react";
import "../Styles/Map.css";
import { Container } from "@mui/material";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Locate() {
  return (
    <Container maxWidth="xl">
    <div className="map-section" id="locate">
        <h3 className="map-title">
          <span>Locate Us</span>
        </h3>
        <p className="map-description">
        For 1-to-1 tuition, opt between Farrer Park home tuition or at the comfort of your own home.
        <br/>For small groups, it will be held at 212C Bidadari Park Dr (refer to map below).
        </p>
    </div>
    {/* WhatsApp Button */}
    <div
      onClick={() => {
        window.open(
          "https://wa.me/6590604833?text=Hi,%20I%20am%20interested%20in%20enrolling%20for%20the%20H1%2FH2%20Chemistry%20tuition%20and%20would%20like%20to%20inquire%20about%20available%20slots%20and%20enrollment%20process.%20Could%20you%20please%20provide%20more%20details%3F%20Thank%20you!",
          "_blank"
        );
      }}
      className="whatsapp-button"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </div>
    </Container>
  );
}

export default Locate;
