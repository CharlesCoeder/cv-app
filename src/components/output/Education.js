/* eslint react/jsx-one-expression-per-line: */// --> OFF
import React from 'react';
import PropTypes from 'prop-types';

function Education(props) {
  const {
    data: {
      'School Name': schoolName, Degree: degree, 'Field of Study': fieldOfStudy, GPA: gpa, 'Start Date': startDate, 'End Date': endDate, City: city, State: state,
    },
  } = props;

  return (
    <div className="Education">
      <div className="school">
        {schoolName} | {city}, {state}
      </div>
      <div className="degree">{degree} in {fieldOfStudy}, GPA {gpa}</div>
      <div className="dates">{startDate} - {endDate}</div>
    </div>
  );
}

Education.propTypes = {
  data: PropTypes.shape({
    'School Name': PropTypes.string.isRequired,
    Degree: PropTypes.string.isRequired,
    'Field of Study': PropTypes.string.isRequired,
    GPA: PropTypes.string.isRequired,
    'Start Date': PropTypes.string.isRequired,
    'End Date': PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
  }).isRequired,
};

export default Education;
