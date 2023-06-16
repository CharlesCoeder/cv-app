import React, { Component } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

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
    const { value, id, mask } = this.props;
    return (
      <div className="InputField">
        <div className="label">{id}</div>
        <InputMask
          mask={mask}
          onChange={this.handleChange}
          value={value}
          placeholder={id}
          maskChar={null}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  mask: PropTypes.string,
};

InputField.defaultProps = {
  value: "",
  mask: null,
};

export default InputField;
