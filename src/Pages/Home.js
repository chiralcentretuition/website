import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Reviews from "../Components/Reviews";
import Tutors from "../Components/Tutors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="aboutus">
        <Tutors />
      </div>
      <Info />
      <div id="testimonials">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
