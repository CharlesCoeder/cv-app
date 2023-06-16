import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import EducationForm from "../forms/EducationForm";

class EducationPage extends Component {
  constructor(props) {
    super(props);

    this.addEducation = this.addEducation.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(sectionType, id) {
    const { removeFormID, handleDelete } = this.props;

    // remove section's input area
    removeFormID("educationFormIDs", id);

    // remove section's output area
    handleDelete(sectionType, id);
  }

  addEducation() {
    const { addEducationForm, addEducationOutput } = this.props;

    // add input area for new education section
    addEducationForm();

    // add coresponding output area on resume
    addEducationOutput();
  }

  render() {
    const { formIDs, updateState, data } = this.props;
    const forms = formIDs.map((formID) => (
      <EducationForm
        updateState={updateState}
        handleDelete={this.handleDelete}
        id={formID}
        key={formID}
        data={data[formID]}
      />
    ));

    return (
      <PerfectScrollbar className="page">
        <div className="intro">What is your educational background?</div>
        {forms}
        <button
          className="addSectionBtn"
          type="button"
          onClick={this.addEducation}
          style={{ verticalAlign: "middle" }}
        >
          <span>Add Section</span>
        </button>
      </PerfectScrollbar>
    );
  }
}

const educationItemPropType = PropTypes.shape({
  "School Name": PropTypes.string,
  Degree: PropTypes.string,
  "Field of Study": PropTypes.string,
  GPA: PropTypes.string,
  "Start Date": PropTypes.instanceOf(Date),
  "End Date": PropTypes.instanceOf(Date),
  City: PropTypes.string,
  State: PropTypes.string,
  id: PropTypes.number,
});

EducationPage.propTypes = {
  removeFormID: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  addEducationForm: PropTypes.func.isRequired,
  addEducationOutput: PropTypes.func.isRequired,
  formIDs: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateState: PropTypes.func.isRequired,
  data: PropTypes.objectOf(educationItemPropType).isRequired,
};

export default EducationPage;
