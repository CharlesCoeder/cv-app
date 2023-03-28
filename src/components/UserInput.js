import React, { Component } from 'react';
import Form from './Form';

class UserInput extends Component {

  render(){

    const basicInfo = ['First Name', 'Last Name', 'Email', 'Phone Number', 'City', 'State', 'Zip']
    const education = ['School Name', 'Field of Study', 'GPA', 'Graduation Date', 'City', 'State',]
    const workExperience = ['Employer', 'Position Title', 'Start Date', 'End date', 'City', 'State']

    return (
      <div className="UserInput">
        <Form fields={basicInfo} updateState={this.props.updateState} formName="Basic Information"/>
        <Form fields={education} updateState={this.props.updateState} formName="Education"/>
        <Form fields={workExperience} updateState={this.props.updateState} formName="Work Experience"/>
      </div> 
    )
  }
}

export default UserInput;