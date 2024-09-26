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
          "https://wa.me/6590604833?text=Hi,%20I%20am%20interested%20in%20enrolling%20for%20the%20H1%2FH2%20Chemistry%20tuition%20and%20would%20like%20to%20inquire%20about%20the%20enrollment%20process.%0AClass%20Type:%201-1%20/%20Small%20Group%0ATimeslot:%0AYear:%20J1%20/%20J2%0ALevel:%20H1%20/%20H2%0ASchool:%20",
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
