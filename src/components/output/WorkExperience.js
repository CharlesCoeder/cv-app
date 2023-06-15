import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Interweave } from "interweave";

function WorkExperience(props) {
  const {
    data: {
      Employer: employer,
      "Position Title": positionTitle,
      "Start Date": startDate,
      "End Date": endDate,
      City: city,
      State: state,
      description,
    },
  } = props;

  function formatDate(dateObj) {
    return format(dateObj, "MMMM yyyy");
  }

  return (
    <div className="WorkExperience">
      <div className="flex">
        <div className="employer">
          {employer} | {city}, {state}
        </div>
        <div className="dates">
          {formatDate(startDate)} - {formatDate(endDate)}
        </div>
      </div>
      <div className="positionTitle">{positionTitle}</div>
      {description ? <div className="description">
        <Interweave content={description} />
      </div> : null}
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
    description: PropTypes.string,
  }).isRequired,
};

export default WorkExperience;
