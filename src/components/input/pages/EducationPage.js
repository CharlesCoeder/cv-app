import React, { Component } from 'react';
import EducationForm from '../forms/EducationForm';

class EducationPage extends Component {
  constructor(props) {
    super(props);

    this.addEducation = this.addEducation.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(sectionType, id) {
    const { removeFormID, handleDelete } = this.props;

    // remove section's input area
    removeFormID('educationFormIDs', id);

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
    const { formIDs, updateState } = this.props;
    const forms = formIDs.map((formID) => (
      <EducationForm
        updateState={updateState}
        handleDelete={this.handleDelete}
        id={formID}
        key={formID}
      />
    ));

    return (
      <div>
        {forms}
        <button type="button" onClick={this.addEducation}>Add Education</button>
      </div>
    );
  }
}

export default EducationPage;
