/* eslint react/jsx-one-expression-per-line: */// --> OFF
import React from 'react';

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

export default Education;
