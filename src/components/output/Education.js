import React, { Component } from 'react';

class Education extends Component {

  render(){

    const schoolName = this.props.data['School Name'];
    const degree = this.props.data['Degree'];
    const fieldOfStudy = this.props.data['Field of Study'];
    const gpa = this.props.data['GPA'];
    const startDate = this.props.data['Start Date'];
    const endDate = this.props.data['End Date'];
    const city = this.props.data['City'];
    const state = this.props.data['State'];

    return (
      <div className="Education">
        <div className="schoolName">{schoolName}</div>
        <div className="degree">{degree}</div>
        <div className="fieldOfStudy">{fieldOfStudy}</div>
        <div className="gpa">{gpa}</div>
        <div className="startDate">{startDate}</div>
        <div className="endDate">{endDate}</div>
        <div className="city">{city}</div>
        <div className="state">{state}</div>
      </div> 
    )
  }
}

export default Education;