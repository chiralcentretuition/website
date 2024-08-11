import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomizedTables from "./LessonSchedule";

function LessonCard(props) {
  return (
    <div className="lesson-cards">
      <span className="lesson-card-icon">
        <FontAwesomeIcon className="lesson-fa-icon" icon={props.icon} />
      </span>
      <p className="lesson-card-title">{props.title}</p>
      <p className="lesson-card-description">{props.description}</p>
      <CustomizedTables className="lesson-card-table" rows={props.rows} />
      <br/><br/>
    </div>
  );
}

export default LessonCard;
