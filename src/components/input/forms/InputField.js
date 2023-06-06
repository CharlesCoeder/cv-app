import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  }

  render() {
    return (
      <div className="InputField">
        <input onChange={this.handleChange} value={this.props.value} placeholder={this.props.id} />
      </div>
    );
  }
}

export default InputField;