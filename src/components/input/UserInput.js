import React, { Component } from 'react';
import BasicInfoForm from './BasicInfoForm';
import EducationForm from './EducationForm';
import WorkExperienceForm from './WorkExperienceForm'

class UserInput extends Component {

  render(){

    return (
      <div className="UserInput">
        <BasicInfoForm updateState={this.props.updateState}/>
        <EducationForm updateState={this.props.updateState}/>
        <WorkExperienceForm updateState={this.props.updateState}/>
      </div> 
    )
  }
}

export default UserInput;