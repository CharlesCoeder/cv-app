import React, { Component } from 'react';

class ResumeSection extends Component {

  render(){
    let sectionInfo = [];

    for (const [key, value] of Object.entries(this.props.data)){
      sectionInfo.push(
        <div>
          <div className={'key'}>{key}</div>
          <div className={'value'}>{value}</div>
        </div>
      )
    }

    return (

      <div className={`section ${this.props.sectionName}`}>
        <div className={'sectionName'}>{this.props.sectionName}</div>
        {sectionInfo}
      </div>

    )

  }

}

export default ResumeSection;