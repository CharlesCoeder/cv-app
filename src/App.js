import React, { Component } from 'react';
import UserInput from './components/input/UserInput';
import ResumeOutput from './components/output/ResumeOutput';

class App extends Component{

  constructor(props) {
    super(props);

    // default state for sample resume
    this.state = {
      'Basic Information': {
        'First Name': 'John',
        'Last Name': 'Doe',
        'Email' : 'johndoe@gmail.com',
        'Phone Number' : '5550007777',
        'City' : 'New York',
        'State' : 'NY',
        'Zip' : '10029',
      },
      'Education': {
        'School Name' : 'Summerville Institute',
        'Degree' : 'BS',
        'Field of Study' : 'Computer Science',
        'GPA' : '4.0',
        'Start Date' : '08/15/2018',
        'End Date' : '05/20/2022',
        'City' : 'New York',
        'State' : 'NY',
      },
      'Work Experience': {
        'Employer' : 'Quickfold Dynamics',
        'Position Title' : 'Software Engineer',
        'Start Date' : '06/15/2022',
        'End Date' : '03/30/2023',
        'City' : 'New York',
        'State' : 'NY',
      },
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(key, state){
    this.setState({[key]: state});
  }

  render(){
    return (
      <div className="App">
        <UserInput updateState={this.updateState}/>
        <ResumeOutput state={this.state}/>
      </div>
    );
  }
}

export default App;
