import React, { Component } from "react";
import PropTypes from "prop-types";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

class ResumeOutput extends Component {
  showEducation() {
    const educationSections = [];
    const {
      state: { Education: education },
    } = this.props;
    Object.values(education).forEach((section) => {
      educationSections.push(<Education data={section} key={section.id} />);
    });
    return educationSections;
  }

  showWork() {
    const workSections = [];
    const {
      state: { "Work Experience": work },
    } = this.props;
    Object.values(work).forEach((section) => {
      workSections.push(<WorkExperience data={section} key={section.id} />);
    });

    return workSections;
  }

  render() {
    const {
      state: {
        "Basic Information": { 0: basicInfo },
      },
    } = this.props;
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

ResumeOutput.propTypes = {
  state: PropTypes.shape({
    Education: PropTypes.objectOf(
      PropTypes.shape({
        "School Name": PropTypes.string,
        Degree: PropTypes.string,
        "Field of Study": PropTypes.string,
        GPA: PropTypes.string,
        "Start Date": PropTypes.string,
        "End Date": PropTypes.string,
        City: PropTypes.string,
        State: PropTypes.string,
        id: PropTypes.number,
      })
    ).isRequired,
    "Work Experience": PropTypes.objectOf(
      PropTypes.shape({
        Employer: PropTypes.string,
        "Position Title": PropTypes.string,
        "Start Date": PropTypes.string,
        "End Date": PropTypes.string,
        City: PropTypes.string,
        State: PropTypes.string,
        id: PropTypes.number,
      })
    ).isRequired,
    "Basic Information": PropTypes.objectOf(
      PropTypes.shape({
        "First Name": PropTypes.string,
        "Last Name": PropTypes.string,
        Email: PropTypes.string,
        "Phone Number": PropTypes.string,
        City: PropTypes.string,
        State: PropTypes.string,
        Zip: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default ResumeOutput;
