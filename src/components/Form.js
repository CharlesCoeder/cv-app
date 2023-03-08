import React, { Component } from 'react';
import InputField from './InputField';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const fields = this.props.fields.map(field => (
      <InputField
        key={field}
        id={field}
        onChange={this.handleFieldChange}
        value={this.state[field]}
      />
    ));

    return (
      <div>
        {this.props.formName}
        {fields}
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default Form;