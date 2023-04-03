import React, { Component } from 'react';
import InputField from './InputField';

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value }, () => {
      this.props.updateState('Basic Information', this.state)
    });
  }

  render(){


    return (
      <div className="inputSection">
        <div>Basic Information</div>
        <InputField key={'First Name'} id={'First Name'} onChange={this.handleFieldChange} value={this.state['First Name']}/>
        <InputField key={'Last Name'} id={'Last Name'} onChange={this.handleFieldChange} value={this.state['Last Name']}/>
        <InputField key={'Email'} id={'Email'} onChange={this.handleFieldChange} value={this.state['Email']}/>
        <InputField key={'Phone Number'} id={'Phone Number'} onChange={this.handleFieldChange} value={this.state['Phone Number']}/>
        <InputField key={'City'} id={'City'} onChange={this.handleFieldChange} value={this.state['City']}/>
        <InputField key={'State'} id={'State'} onChange={this.handleFieldChange} value={this.state['State']}/>
        <InputField key={'Zip'} id={'Zip'} onChange={this.handleFieldChange} value={this.state['Zip']}/>
      </div> 
    )
  }
}

export default BasicInfoForm;