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
        <div className="school">
          {schoolName} | {city}, {state}
        </div>
        <div className="degree">{degree} in {fieldOfStudy}, GPA {gpa}</div>
        <div className="dates">{startDate} - {endDate}</div>
      </div> 
    )
  }
}

export default Education;