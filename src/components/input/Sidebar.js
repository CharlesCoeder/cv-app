import React, { Component } from "react";
import PropTypes from "prop-types";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const { changePage } = this.props;
    const page = event.currentTarget.getAttribute("data-page");
    changePage(page);
  };

  render() {
    return (
      <div className="sidebar">
        <div className="title">CV Craft</div>
        <ul className="list">
          <button
            className="pageBtn"
            type="button"
            onClick={this.handleClick}
            data-page="basicInfoPage"
          >
            Basic Information
          </button>
          <button
            className="pageBtn"
            type="button"
            onClick={this.handleClick}
            data-page="educationPage"
          >
            Education
          </button>
          <button
            className="pageBtn"
            type="button"
            onClick={this.handleClick}
            data-page="workPage"
          >
            Work Experience
          </button>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Sidebar;
