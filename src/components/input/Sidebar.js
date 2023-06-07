import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const { changePage } = this.props;
    const page = event.currentTarget.getAttribute('data-page');
    changePage(page);
  };

  render() {
    return (
      <div className="sidebar">
        <ul className="list">
          <button className="pageBtn" type="button" onClick={this.handleClick} data-page="basicInfoPage">Basic Information</button>
          <button className="pageBtn" type="button" onClick={this.handleClick} data-page="educationPage">Education</button>
          <button className="pageBtn" type="button" onClick={this.handleClick} data-page="workPage">Work Experience</button>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
