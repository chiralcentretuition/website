import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Lessons from "../Components/Lessons";

function Timeslots() {
  return (
    <div className="timeslot-section">
      <Navbar />
      <Lessons />
      <Footer />
    </div>
  );
}

export default Timeslots;
