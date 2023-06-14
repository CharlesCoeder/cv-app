import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

function WorkExperience(props) {
  const {
    data: {
      Employer: employer,
      "Position Title": positionTitle,
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
    <div className="WorkExperience">
      <div className="employer">
        {employer} | {city}, {state}
      </div>
      <div className="positionTitle">{positionTitle}</div>
      <div className="dates">
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
    </div>
  );
}

WorkExperience.propTypes = {
  data: PropTypes.shape({
    Employer: PropTypes.string.isRequired,
    "Position Title": PropTypes.string.isRequired,
    "Start Date": PropTypes.instanceOf(Date).isRequired,
    "End Date": PropTypes.instanceOf(Date).isRequired,
    City: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkExperience;
