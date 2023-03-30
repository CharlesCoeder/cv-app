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

        <div>
          <h1>Basic Info</h1>
          <BasicInfo data={state['Basic Information']} />
          <hr></hr>
          <h1>Education</h1>
          <Education data={state['Education']} />
          <hr></hr>
          <h1>Work Experience</h1>
          <WorkExperience data={state['Work Experience']} />

        {/* {sections} */}
      </div> 
    )
  }
}

export default ResumeOutput;