import React, { Component } from 'react';
import BasicInfoForm from './BasicInfoForm';
import EducationForm from './EducationForm';
import WorkExperienceForm from './WorkExperienceForm'

class UserInput extends Component {

  constructor(props){
    super(props)
    this.onClickEducation = this.onClickEducation.bind(this);
    this.onClickWork = this.onClickWork.bind(this);

    this.state = {
      educationForms : [<EducationForm updateState={this.props.updateState} id={0} key={0}/>],
      workForms : [<WorkExperienceForm updateState={this.props.updateState} id={0} key={0}/>],
    }


  }

  onClickEducation(){
    const { educationCounter, updateState } = this.props;

    // add input area for new education section
    this.setState(prevState => ({
      educationForms: [...prevState.educationForms, <EducationForm updateState={updateState} id={educationCounter} key={educationCounter} />]
    }));
    
    // add new section to parent state, which will then show its output
    this.props.addEducation()
  }

  onClickWork(){

    const { workCounter, updateState } = this.props;
    console.log(workCounter)

    // add input area for new work section
    this.setState(prevState => ({
      workForms: [...prevState.workForms, <WorkExperienceForm updateState={updateState} id={workCounter} key={workCounter} />]
    }));
    
    // add new section to parent state, which will then show its output
    this.props.addWork()
  }


  render(){

    return (
      <div className="UserInput">
        <BasicInfoForm updateState={this.props.updateState}/>
        {this.state.educationForms}
        <button onClick={this.onClickEducation}>Add new education</button>
        {this.state.workForms}
        <button onClick={this.onClickWork}>Add new work</button>
      </div> 
    )
  }
}

export default UserInput;