import React, { Component } from 'react';
import ResumeSection from './ResumeSection';

class ResumeOutput extends Component {

  render(){
    const state = this.props.state;
    let sections = [];

    for (let section in state){
      sections.push(
        <ResumeSection data={state[section]} sectionName={section} />
      )
    }

    return (
      <div className="ResumeOutput">
        <div className="resumeOutputHeader">Resume Output</div>
        {sections}
      </div> 
    )
  }
}

export default ResumeOutput;