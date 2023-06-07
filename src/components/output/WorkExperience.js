/* eslint react/jsx-one-expression-per-line: */// --> OFF
import React, { Component } from 'react';

function WorkExperience(props) {
  const {
    data: {
      Employer: employer, 'Position Title': positionTitle, 'Start Date': startDate, 'End Date': endDate, City: city, State: state,
    },
  } = props;

  return (
    <div className="WorkExperience">
      <div className="employer">{employer} | {city}, {state}</div>
      <div className="positionTitle">{positionTitle}</div>
      <div className="dates">{startDate} - {endDate}</div>
    </div>
  );
}

export default WorkExperience;
