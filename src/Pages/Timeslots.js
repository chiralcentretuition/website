import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Lessons from "../Components/Lessons";
import Enquire from "../Components/Enquire";

function Timeslots() {
  return (
    <div className="timeslot-section">
      <Navbar />
      <Lessons />
      <Enquire />
      <Footer />
    </div>
  );
}

export default Timeslots;
