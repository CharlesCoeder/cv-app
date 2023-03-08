import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component{
  render(){
    const basicInfo = ['First Name', 'Last Name', 'Email', 'Phone Number', 'City', 'State', 'Zip']
    const education = ['School Name', 'Field of Study', 'GPA', 'Graduation Date', 'City', 'State',]
    const workExperience = ['Employer', 'Position Title', 'Start Date', 'End date', 'City', 'State']
    return (
      <div className="App">
        <Form fields={basicInfo} formName="Basic Information"/>
        <Form fields={education} formName="Education"/>
        <Form fields={workExperience} formName="Work Experience"/>
      </div>
    );
  }
}

export default App;
