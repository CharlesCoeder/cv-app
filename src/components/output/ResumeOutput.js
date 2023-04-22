import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';

class ResumeOutput extends Component {

  showEducation(){
    let educationSections = [];
    const education = this.props.state['Education']
    for (const section in education){
      educationSections.push(
        <Education data={education[section]} key={education[section].id} />
      )
    }
    return educationSections;
  }

  showWork(){
    let workSections = [];
    const work = this.props.state['Work Experience']
    for (const section in work){
      workSections.push(
        <WorkExperience data={work[section]} key={work[section].id} />
      )
    }

    return workSections;
  }

  render(){
    const state = this.props.state;

    const educationSections = this.showEducation();
    const workSections = this.showWork();

    return (

        <div className="ResumeOutput">
          <BasicInfo data={state['Basic Information'][0]} />
          <h1>Education</h1>
          <hr></hr>
          {educationSections}
          <h1>Work Experience</h1>
          <hr></hr>
          {workSections}
      </div> 
    )
  }
}

export default ResumeOutput;