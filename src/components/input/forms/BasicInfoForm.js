import React, { Component } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    const { updateState } = this.props;
    updateState("Basic Information", 0, fieldId, value);
  }

  render() {
    const {
      data: {
        "First Name": firstName,
        "Last Name": lastName,
        Email,
        "Phone Number": phoneNumber,
        City,
        State,
        Zip,
      },
    } = this.props;
    return (
      <div className="inputSection">
        <InputField
          key="First Name"
          id="First Name"
          onChange={this.handleFieldChange}
          value={firstName}
        />
        <InputField
          key="Last Name"
          id="Last Name"
          onChange={this.handleFieldChange}
          value={lastName}
        />
        <InputField
          key="Email"
          id="Email"
          onChange={this.handleFieldChange}
          value={Email}
        />
        <InputField
          key="Phone Number"
          id="Phone Number"
          onChange={this.handleFieldChange}
          value={phoneNumber}
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
        <InputField
          key="Zip"
          id="Zip"
          onChange={this.handleFieldChange}
          value={Zip}
        />
      </div>
    );
  }
}

BasicInfoForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  data: PropTypes.shape({
    "First Name": PropTypes.string,
    "Last Name": PropTypes.string,
    Email: PropTypes.string,
    "Phone Number": PropTypes.string,
    City: PropTypes.string,
    State: PropTypes.string,
    Zip: PropTypes.string,
  }).isRequired,
};

export default BasicInfoForm;
