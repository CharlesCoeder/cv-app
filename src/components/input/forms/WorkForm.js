import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import MonthSelectPlugin from "flatpickr/dist/plugins/monthSelect/index";
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/plugins/monthSelect/style.css";
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

  handleDateChange = (key) => (dateArray) => {
    const { updateState, id } = this.props;
    const date = dateArray[0];
    if (key === "Start Date") {
      updateState("Work Experience", id, "Start Date", date);
    } else if (key === "End Date") {
      updateState("Work Experience", id, "End Date", date);
    }
  };

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
        <div>
          <div className="label">Start Date</div>
          <Flatpickr
            data-enable-time
            value={startDate}
            onChange={this.handleDateChange("Start Date")}
            options={{
              mode: "single",
              dateFormat: "M Y",
              plugins: [
                new MonthSelectPlugin({
                  shorthand: true,
                  dateFormat: "M Y",
                  altFormat: "F Y",
                }),
              ],
            }}
          />
        </div>
        <div>
          <div className="label">End Date</div>
          <Flatpickr
            data-enable-time
            value={endDate}
            onChange={this.handleDateChange("End Date")}
            options={{
              mode: "single",
              dateFormat: "M Y",
              plugins: [
                new MonthSelectPlugin({
                  shorthand: true,
                  dateFormat: "M Y",
                  altFormat: "F Y",
                }),
              ],
            }}
          />
        </div>
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
        <button
          className="removeSectionBtn"
          type="button"
          onClick={this.handleDelete}
        >
          Remove Section
        </button>
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
    "Start Date": PropTypes.instanceOf(Date),
    "End Date": PropTypes.instanceOf(Date),
    City: PropTypes.string,
    State: PropTypes.string,
  }).isRequired,
};

export default WorkForm;
