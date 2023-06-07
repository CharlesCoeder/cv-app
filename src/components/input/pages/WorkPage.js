import React, { Component } from 'react';
import WorkForm from '../forms/WorkForm';

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.addWork = this.addWork.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(sectionType, id) {
    const { removeFormID, handleDelete } = this.props;

    // remove section's input area
    removeFormID('workFormIDs', id);

    // remove section's output area
    handleDelete(sectionType, id);
  }

  addWork() {
    const { addWorkForm, addWorkOutput } = this.props;

    // add input area for new work section
    addWorkForm();

    // add coresponding output area on resume
    addWorkOutput();
  }

  render() {
    const { formIDs, updateState } = this.props;
    const forms = formIDs.map((formID) => (
      <WorkForm
        updateState={updateState}
        handleDelete={this.handleDelete}
        id={formID}
        key={formID}
      />
    ));

    return (
      <div>
        {forms}
        <button type="button" onClick={this.addWork}>Add Work</button>
      </div>
    );
  }
}

export default WorkPage;
