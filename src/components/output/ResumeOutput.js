import React, { Component } from 'react';
import ResumeSection from './ResumeSection';
import BasicInfo from './BasicInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';

class ResumeOutput extends Component {

  render(){
    const state = this.props.state;
    // let sections = [];

    // for (let section in state){
    //   sections.push(
    //     <ResumeSection data={state[section]} sectionName={section} />
    //   )
    // }

    return (

        <div className="ResumeOutput">
          <BasicInfo data={state['Basic Information']} />
          <h1>Education</h1>
          <hr></hr>
          <Education data={state['Education']} />
          <h1>Work Experience</h1>
          <hr></hr>
          <WorkExperience data={state['Work Experience']} />

        {/* {sections} */}
      </div> 
    )
  }
}

export default ResumeOutput;