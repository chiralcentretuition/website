import React from "react";
import InformationCard from "./InformationCard";
import { faUser, faChalkboardTeacher, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { Container } from "@mui/material";

function Info() {
  return (
    <Container maxWidth="xl">
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Guaranteed Results</span>
        </h3>
        <p className="info-description">
        Chiral Centre is dedicated to delivering high-quality educational services by equipping students with the necessary foundation to excel in Chemistry at the GCE ‘A’ Levels.
        We provide 1 to 1 or small group tuition classes based on your needs.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Personalised Attention in Small Groups"
          description="Chiral Centre ensures focused learning with small class sizes, 
          allowing personalized attention, active participation, 
          and tailored teaching methods to enhance understanding of A Level Chemistry."
          icon={faUser}
        />

        <InformationCard
          title="Experienced Tutor for Academic Excellence"
          description="Our tutor at Chiral Centre is highly qualified and experienced, 
          providing students with expert guidance, in-depth knowledge of the curriculum, 
          and effective exam strategies for success in GCE A Level Chemistry."
          icon={faChalkboardTeacher}
        />

        <InformationCard
          title="Innovative Resources and Learning Strategies"
          description="Chiral Centre goes beyond traditional methods, offering comprehensive study materials, 
          interactive tools, and varied teaching techniques to make complex concepts understandable, 
          fostering critical thinking skills essential for A Level Chemistry success."
          icon={faLightbulb}
        />
      </div>
    </div>
    </Container>
  );
}

export default Info;
