import React, { Component } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFieldChange(fieldId, value) {
    const { updateState, id } = this.props;
    this.setState({ [fieldId]: value }, () => {
      updateState("Education", id, fieldId, value);
    });
  }

  handleDelete() {
    const { handleDelete, id } = this.props;
    handleDelete("Education", id);
  }

  render() {
    const {
      "School Name": schoolName,
      Degree,
      "Field of Study": fieldOfStudy,
      GPA,
      "Start Date": startDate,
      "End Date": endDate,
      City,
      State,
    } = this.state;
    return (
      <div className="inputSection">
        <div>
          Education
          <button type="button" onClick={this.handleDelete}>
            X
          </button>
        </div>
        <InputField
          key="School Name"
          id="School Name"
          onChange={this.handleFieldChange}
          value={schoolName}
        />
        <InputField
          key="Degree"
          id="Degree"
          onChange={this.handleFieldChange}
          value={Degree}
        />
        <InputField
          key="Field of Study"
          id="Field of Study"
          onChange={this.handleFieldChange}
          value={fieldOfStudy}
        />
        <InputField
          key="GPA"
          id="GPA"
          onChange={this.handleFieldChange}
          value={GPA}
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

EducationForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default EducationForm;
