import React, { Component } from 'react';

class WorkExperience extends Component {

  render(){

    const employer = this.props.data['Employer'];
    const positionTitle = this.props.data['Position Title'];
    const startDate = this.props.data['Start Date'];
    const endDate = this.props.data['End Date'];
    const city = this.props.data['City'];
    const state = this.props.data['State'];

    return (
      <div className="WorkExperience">
        <div className="employer">{employer} | {city}, {state}</div>
        <div className="positionTitle">{positionTitle}</div>
        <div className="dates">{startDate} - {endDate}</div>
      </div> 
    )
  }
}

export default WorkExperience;