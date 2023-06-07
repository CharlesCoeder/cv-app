import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';

class ResumeOutput extends Component {
  showEducation() {
    const educationSections = [];
    const { state: { Education: education } } = this.props;
    Object.values(education).forEach((section) => {
      educationSections.push(
        <Education data={section} key={section.id} />,
      );
    });
    return educationSections;
  }

  showWork() {
    const workSections = [];
    const { state: { 'Work Experience': work } } = this.props;
    Object.values(work).forEach((section) => {
      workSections.push(
        <WorkExperience data={section} key={section.id} />,
      );
    });

    return workSections;
  }

  render() {
    const { state: { 'Basic Information': { 0: basicInfo } } } = this.props;
    const educationSections = this.showEducation();
    const workSections = this.showWork();

    return (

      <div className="ResumeOutput">
        <BasicInfo data={basicInfo} />
        <h1>Education</h1>
        <hr />
        {educationSections}
        <h1>Work Experience</h1>
        <hr />
        {workSections}
      </div>
    );
  }
}

export default ResumeOutput;
