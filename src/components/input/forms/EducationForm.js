import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import MonthSelectPlugin from "flatpickr/dist/plugins/monthSelect/index";
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/plugins/monthSelect/style.css";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import InputField from "./InputField";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]],
  clipboard: {
    matchVisual: false,
  },
};

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.quillRef = React.createRef();
  }

  handleFieldChange(fieldId, value) {
    const { updateState, id } = this.props;
    updateState("Education", id, fieldId, value);
  }

  handleDescriptionChange = (value) => {
    if (
      this.quillRef &&
      this.quillRef.current &&
      this.quillRef.current.getEditor
    ) {
      const { updateState, id } = this.props;
      let val = value;
      if (this.quillRef.current.getEditor().getText() === "\n") {
        val = "";
      }
      updateState("Education", id, "description", val);
    }
  };

  handleDateChange = (key) => (dateArray) => {
    const { updateState, id } = this.props;
    const date = dateArray[0];
    if (key === "Start Date") {
      updateState("Education", id, "Start Date", date);
    } else if (key === "End Date") {
      updateState("Education", id, "End Date", date);
    }
  };

  handleDelete() {
    const { handleDelete, id } = this.props;
    handleDelete("Education", id);
  }

  render() {
    const {
      data: {
        "School Name": schoolName,
        Degree,
        "Field of Study": fieldOfStudy,
        GPA,
        "Start Date": startDate,
        "End Date": endDate,
        City,
        State,
        description,
      },
    } = this.props;
    return (
      <div className="inputSection">
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
        <div className="dateField">
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
        <div className="dateField">
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
        <div className="bottomContainer">
          <div className="descriptionField">
            <div className="label">Description</div>
            <ReactQuill
              ref={this.quillRef}
              value={description}
              onChange={this.handleDescriptionChange}
              modules={modules}
            />
          </div>
          <button
            onClick={this.handleDelete}
            type="button"
            className="removeSectionBtn"
          >
            <span className="icon-cross" />
            <span className="visually-hidden">Close</span>
          </button>
        </div>
      </div>
    );
  }
}

EducationForm.propTypes = {
  updateState: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  data: PropTypes.shape({
    "School Name": PropTypes.string,
    Degree: PropTypes.string,
    "Field of Study": PropTypes.string,
    GPA: PropTypes.string,
    "Start Date": PropTypes.instanceOf(Date),
    "End Date": PropTypes.instanceOf(Date),
    City: PropTypes.string,
    State: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default EducationForm;
