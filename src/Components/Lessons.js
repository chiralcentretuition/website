import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LessonCard from "./LessonCard";
import { faUser, faUsers, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Lessons.css";
import { Container } from "@mui/material";
import supabase from "../Config/supabaseClient";

function Lessons() {
  const [fetchError1to1, setFetchError1to1] = useState(null);
  const [rows1to1, setRows1to1] = useState(null);
  const [fetchErrorGroup, setFetchErrorGroup] = useState(null);
  const [rowsGroup, setRowsGroup] = useState(null);
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetch1to1Data = async() => {
      const { data, error } = await supabase
        .from('timeslots-1to1')
        .select()
      if(error) {
        setFetchError1to1('Could not fetch the timeslots-1to1 data.');
        setRows1to1(null);
        console.log(error);
      } if(data) {
        setRows1to1(data);
        setFetchError1to1(null);
      }
    }
    fetch1to1Data();

    const fetchGroupData = async() => {
      const { data, error } = await supabase
        .from('timeslots-smallgroups')
        .select()
      if(error) {
        setFetchErrorGroup('Could not fetch the timeslots-smallgroups data.');
        setRowsGroup(null);
        console.log(error);
      } if(data) {
        setRowsGroup(data);
        setFetchErrorGroup(null);
      }
    }
    fetchGroupData();

    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <Container maxWidth="xl">
    <div className="lesson-section" id="services">
      <div className="lesson-title-content">
        <h3 className="lesson-title">
          <span>Class Sizes</span>
        </h3>
        <p className="lesson-description">
        The focus is on teaching H1/H2 Chemistry for A level students. You can choose either 1-to-1 tuition or join a small class.
        </p>
      </div>

      <div className="lesson-cards-content">
        {fetchError1to1 && (<p>{fetchError1to1}</p>)}
        {rows1to1 && (
          <LessonCard
            title="1-to-1"
            description="Get personalised attention with our 1-to-1 tuition for H1/H2 Chemistry at the GCE 'A' Levels."
            icon={faUser}
            rows={rows1to1}
          />
        )}

        {fetchErrorGroup && (<p>{fetchErrorGroup}</p>)}
        {rowsGroup && (
          <LessonCard
            title="Small Groups (&#8804;5)"
            description="Join collaborative small group classes tailored for effective learning in H1/H2 Chemistry at the GCE 'A' Levels."
            icon={faUsers}
            rows={rowsGroup}
          />
        )}
      </div>
    </div>
    <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
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

export default Lessons;
