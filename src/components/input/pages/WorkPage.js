import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import WorkForm from "../forms/WorkForm";

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.addWork = this.addWork.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(sectionType, id) {
    const { removeFormID, handleDelete } = this.props;

    // remove section's input area
    removeFormID("workFormIDs", id);

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
    const { formIDs, updateState, data } = this.props;
    const forms = formIDs.map((formID) => (
      <WorkForm
        updateState={updateState}
        handleDelete={this.handleDelete}
        id={formID}
        key={formID}
        data={data[formID]}
      />
    ));

    return (
      <PerfectScrollbar className="page">
        <div className="intro">What about any work experience?</div>
        {forms}
        <button
          className="addSectionBtn"
          type="button"
          onClick={this.addWork}
          style={{ verticalAlign: "middle" }}
        >
          <span>Add Section</span>
        </button>
      </PerfectScrollbar>
    );
  }
}

const workItemPropType = PropTypes.shape({
  Employer: PropTypes.string,
  "Position Title": PropTypes.string,
  "Start Date": PropTypes.instanceOf(Date),
  "End Date": PropTypes.instanceOf(Date),
  City: PropTypes.string,
  State: PropTypes.string,
});

WorkPage.propTypes = {
  removeFormID: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  addWorkForm: PropTypes.func.isRequired,
  addWorkOutput: PropTypes.func.isRequired,
  formIDs: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateState: PropTypes.func.isRequired,
  data: PropTypes.objectOf(workItemPropType).isRequired,
};

export default WorkPage;
