import React, { Component } from 'react';
import InputField from './InputField';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value }, () => {
      this.props.updateState('Education', this.props.id, fieldId, value)
    });
  }

  handleDelete(){
    this.props.handleDelete('Education', this.props.id);
  }

  render(){
    return (
      <div className="inputSection">
        <div>Education<button onClick={this.handleDelete}>X</button></div>
        <InputField key={'School Name'} id={'School Name'} onChange={this.handleFieldChange} value={this.state['School Name']}/>
        <InputField key={'Degree'} id={'Degree'} onChange={this.handleFieldChange} value={this.state['Degree']}/>
        <InputField key={'Field of Study'} id={'Field of Study'} onChange={this.handleFieldChange} value={this.state['Field of Study']}/>
        <InputField key={'GPA'} id={'GPA'} onChange={this.handleFieldChange} value={this.state['GPA']}/>
        <InputField key={'Start Date'} id={'Start Date'} onChange={this.handleFieldChange} value={this.state['Start Date']}/>
        <InputField key={'End Date'} id={'End Date'} onChange={this.handleFieldChange} value={this.state['End Date']}/>
        <InputField key={'City'} id={'City'} onChange={this.handleFieldChange} value={this.state['City']}/>
        <InputField key={'State'} id={'State'} onChange={this.handleFieldChange} value={this.state['State']}/>
      </div> 
    )
  }
}

export default EducationForm;