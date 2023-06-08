import React, { Component } from "react";
import PropTypes from "prop-types";
import BasicInfoPage from "./pages/BasicInfoPage";
import EducationPage from "./pages/EducationPage";
import WorkPage from "./pages/WorkPage";
import Sidebar from "./Sidebar";

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "basicInfoPage",
      educationFormIDs: [0],
      workFormIDs: [0],
    };

    this.changePage = this.changePage.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.removeFormID = this.removeFormID.bind(this);
  }

  addEducationForm() {
    const { educationCounter } = this.props;
    this.setState((prevState) => ({
      educationFormIDs: [...prevState.educationFormIDs, educationCounter],
    }));
  }

  addWorkForm() {
    const { workCounter } = this.props;
    this.setState((prevState) => ({
      workFormIDs: [...prevState.workFormIDs, workCounter],
    }));
  }

  changePage(newPage) {
    this.setState({ currentPage: newPage });
  }

  removeFormID(key, id) {
    this.setState((prevState) => ({
      [key]: prevState[key].filter((formID) => formID !== id),
    }));
  }

  render() {
    let page;
    const { currentPage, educationFormIDs, workFormIDs } = this.state;
    const { updateState, handleDelete, addEducation, addWork } = this.props;
    switch (currentPage) {
      case "basicInfoPage":
        page = <BasicInfoPage updateState={updateState} />;
        break;
      case "educationPage":
        page = (
          <EducationPage
            formIDs={educationFormIDs}
            removeFormID={this.removeFormID}
            updateState={updateState}
            handleDelete={handleDelete}
            addEducationOutput={addEducation}
            addEducationForm={this.addEducationForm}
          />
        );
        break;
      case "workPage":
        page = (
          <WorkPage
            formIDs={workFormIDs}
            removeFormID={this.removeFormID}
            updateState={updateState}
            handleDelete={handleDelete}
            addWorkOutput={addWork}
            addWorkForm={this.addWorkForm}
          />
        );
        break;
      default:
        page = <BasicInfoPage updateState={this.updateState} />;
    }

    return (
      <div className="UserInput">
        <Sidebar changePage={this.changePage} />
        {page}
      </div>
    );
  }
}

UserInput.propTypes = {
  educationCounter: PropTypes.number.isRequired,
  workCounter: PropTypes.number.isRequired,
  updateState: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,
  addWork: PropTypes.func.isRequired,
};

export default UserInput;
