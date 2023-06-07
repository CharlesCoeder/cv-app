import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange, id } = this.props;
    const text = event.target.value;
    onChange(id, text);
  }

  render() {
    const { value, id } = this.props;
    return (
      <div className="InputField">
        <input onChange={this.handleChange} value={value} placeholder={id} />
      </div>
    );
  }
}

export default InputField;
