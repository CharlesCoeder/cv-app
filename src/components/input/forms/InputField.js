import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <div className="label">{id}</div>
        <input onChange={this.handleChange} value={value} placeholder={id} />
      </div>
    );
  }
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
};

InputField.defaultProps = {
  value: "",
};

export default InputField;
