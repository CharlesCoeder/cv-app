import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

function Education(props) {
  const {
    data: {
      "School Name": schoolName,
      Degree: degree,
      "Field of Study": fieldOfStudy,
      GPA: gpa,
      "Start Date": startDate,
      "End Date": endDate,
      City: city,
      State: state,
    },
  } = props;

  function formatDate(dateObj) {
    return format(dateObj, "MMMM yyyy");
  }

  return (
    <div className="Education">
      <div className="school">
        {schoolName} | {city}, {state}
      </div>
      <div className="degree">
        {degree} in {fieldOfStudy}, GPA {gpa}
      </div>
      <div className="dates">
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
    </div>
  );
}

Education.propTypes = {
  data: PropTypes.shape({
    "School Name": PropTypes.string.isRequired,
    Degree: PropTypes.string.isRequired,
    "Field of Study": PropTypes.string.isRequired,
    GPA: PropTypes.string.isRequired,
    "Start Date": PropTypes.instanceOf(Date).isRequired,
    "End Date": PropTypes.instanceOf(Date).isRequired,
    City: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
  }).isRequired,
};

export default Education;
