import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Map from "../Components/Map";
import Locate from "../Components/Locate";

function LocateUs() {
  return (
    <div className="locateus-section">
      <Navbar />
      <Locate />
      <Map />
      <Footer />
    </div>
  );
}

export default LocateUs;
