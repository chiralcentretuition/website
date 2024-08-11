import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Enquire from "../Components/Enquire";
import Map from "../Components/Map";
import Locate from "../Components/Locate";

function LocateUs() {
  return (
    <div className="locateus-section">
      <Navbar />
      <Locate />
      <Map />
      <Enquire />
      <Footer />
    </div>
  );
}

export default LocateUs;
