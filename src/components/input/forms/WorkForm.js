import React, { Component } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFieldChange(fieldId, value) {
    const { updateState, id } = this.props;
    updateState("Work Experience", id, fieldId, value);
  }

  handleDelete() {
    const { handleDelete, id } = this.props;
    handleDelete("Work Experience", id);
  }

  render() {
    const {
      data: {
        Employer,
        "Position Title": positionTitle,
        "Start Date": startDate,
        "End Date": endDate,
        City,
        State,
      },
    } = this.props;
    return (
      <div className="inputSection">
        <div>
          Work Experience
          <button type="button" onClick={this.handleDelete}>
            X
          </button>
        </div>
        <InputField
          key="Employer"
          id="Employer"
          onChange={this.handleFieldChange}
          value={Employer}
        />
        <InputField
          key="Position Title"
          id="Position Title"
          onChange={this.handleFieldChange}
          value={positionTitle}
        />
        <InputField
          key="Start Date"
          id="Start Date"
          onChange={this.handleFieldChange}
          value={startDate}
        />
        <InputField
          key="End Date"
          id="End Date"
          onChange={this.handleFieldChange}
          value={endDate}
        />
        <InputField
          key="City"
          id="City"
          onChange={this.handleFieldChange}
          value={City}
        />
        <InputField
          key="State"
          id="State"
          onChange={this.handleFieldChange}
          value={State}
        />
      </div>
    );
  }
}

WorkForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  data: PropTypes.shape({
    Employer: PropTypes.string,
    "Position Title": PropTypes.string,
    "Start Date": PropTypes.string,
    "End Date": PropTypes.string,
    City: PropTypes.string,
    State: PropTypes.string,
  }).isRequired,
};

export default WorkForm;
