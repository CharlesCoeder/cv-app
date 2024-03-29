import React, { Component } from "react";
import UserInput from "./components/input/UserInput";
import ResumeOutput from "./components/output/ResumeOutput";
import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);

    // default state for sample resume
    this.state = {
      "Basic Information": {
        0: {
          "First Name": "John",
          "Last Name": "Doe",
          Email: "johndoe@gmail.com",
          "Phone Number": "555-286-7037",
          City: "New York",
          State: "NY",
          Zip: "10029",
        },
      },

      Education: {
        0: {
          "School Name": "Summerville Institute",
          Degree: "BS",
          "Field of Study": "Computer Science",
          GPA: "4.0",
          "Start Date": new Date("08-15-2018"),
          "End Date": new Date("05-20-2022"),
          City: "New York",
          State: "NY",
          id: 0,
        },
      },

      "Work Experience": {
        0: {
          Employer: "Quickfold Dynamics",
          "Position Title": "Software Engineer",
          "Start Date": new Date("06-15-2022"),
          "End Date": new Date("03-30-2023"),
          City: "New York",
          State: "NY",
          id: 0,
        },
      },

      educationCounter: 1,
      workCounter: 1,
    };

    this.updateState = this.updateState.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // remove a section from state
  handleDelete(sectionType, id) {
    const state = { ...this.state };
    delete state[sectionType][id];
    this.setState(state);
  }

  addEducation() {
    this.setState((prevState) => ({
      ...prevState,
      Education: {
        ...prevState.Education,
        [prevState.educationCounter]: {
          "School Name": "Coppermind Institute",
          Degree: "BS",
          "Field of Study": "Computer Science",
          GPA: "4.0",
          "Start Date": new Date("08-15-2018"),
          "End Date": new Date("05-20-2022"),
          City: "New York",
          State: "NY",
          sectionType: "Education",
          id: prevState.educationCounter,
        },
      },

      educationCounter: prevState.educationCounter + 1,
    }));
  }

  addWork() {
    this.setState((prevState) => ({
      ...prevState,
      "Work Experience": {
        ...prevState["Work Experience"],
        [prevState.workCounter]: {
          Employer: "Quickfold Dynamics",
          "Position Title": "Software Engineer",
          "Start Date": new Date("06-15-2022"),
          "End Date": new Date("03-30-2023"),
          City: "New York",
          State: "NY",
          sectionType: "Work Experience",
          id: prevState.workCounter,
        },
      },

      workCounter: prevState.workCounter + 1,
    }));
  }

  updateState(container, sectionID, property, value) {
    this.setState((prevState) => ({
      ...prevState,
      [container]: {
        ...prevState[container],
        [sectionID]: {
          ...prevState[container][sectionID],
          [property]: value,
        },
      },
    }));
  }

  render() {
    const { educationCounter, workCounter, ...data } = this.state;

    return (
      <div className="App">
        <UserInput
          updateState={this.updateState}
          addEducation={this.addEducation}
          addWork={this.addWork}
          educationCounter={educationCounter}
          workCounter={workCounter}
          handleDelete={this.handleDelete}
          data={data}
        />

        <ResumeOutput state={this.state} />
      </div>
    );
  }
}

export default App;
