import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Timeslots from "./Pages/Timeslots";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import LocateUs from "./Pages/LocateUs";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeslots" element={<Timeslots />} />
          <Route path="/locateus" element={<LocateUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
