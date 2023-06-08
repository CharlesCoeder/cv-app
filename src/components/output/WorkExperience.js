import React from "react";
import PropTypes from "prop-types";

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

  return (
    <div className="WorkExperience">
      <div className="employer">
        {employer} | {city}, {state}
      </div>
      <div className="positionTitle">{positionTitle}</div>
      <div className="dates">
        {startDate} - {endDate}
      </div>
    </div>
  );
}

WorkExperience.propTypes = {
  data: PropTypes.shape({
    Employer: PropTypes.string.isRequired,
    "Position Title": PropTypes.string.isRequired,
    "Start Date": PropTypes.string.isRequired,
    "End Date": PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkExperience;
