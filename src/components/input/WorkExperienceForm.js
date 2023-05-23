import React, { Component } from 'react';
import InputField from './InputField';

class WorkExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value }, () => {
      this.props.updateState('Work Experience', this.props.id, fieldId, value)
    });
  }

  handleDelete(){
    this.props.handleDelete('Work Experience', this.props.id);
  }

  render(){


    return (
      <div className="inputSection">
        <div>Work Experience<button onClick={this.handleDelete}>X</button></div>
        <InputField key={'Employer'} id={'Employer'} onChange={this.handleFieldChange} value={this.state['Employer']}/>
        <InputField key={'Position Title'} id={'Position Title'} onChange={this.handleFieldChange} value={this.state['Position Title']}/>
        <InputField key={'Start Date'} id={'Start Date'} onChange={this.handleFieldChange} value={this.state['Start Date']}/>
        <InputField key={'End Date'} id={'End Date'} onChange={this.handleFieldChange} value={this.state['End Date']}/>
        <InputField key={'City'} id={'City'} onChange={this.handleFieldChange} value={this.state['City']}/>
        <InputField key={'State'} id={'State'} onChange={this.handleFieldChange} value={this.state['State']}/>
      </div> 
    )
  }
}

export default WorkExperienceForm;