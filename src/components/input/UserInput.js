import React, { Component } from 'react';
import BasicInfoForm from './BasicInfoForm';
import EducationForm from './EducationForm';
import WorkExperienceForm from './WorkExperienceForm'

class UserInput extends Component {

  constructor(props){
    super(props)
    this.onClickEducation = this.onClickEducation.bind(this);
    this.onClickWork = this.onClickWork.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      educationForms : {0: <EducationForm updateState={this.props.updateState} handleDelete={this.handleDelete} id={0} key={0}/>},
      workForms : {0: <WorkExperienceForm updateState={this.props.updateState} handleDelete={this.handleDelete} id={0} key={0}/>},     
    }

  }

  onClickEducation(){
    const { educationCounter, updateState } = this.props;

    // add input area for new education section
    this.setState(prevState => ({
      educationForms : {...prevState.educationForms, 
        educationCounter : <EducationForm updateState={updateState} handleDelete={this.handleDelete} id={educationCounter} key={educationCounter}/>}
    }));
    
    // add new section to parent state, which will then show its output
    this.props.addEducation()
  }

  onClickWork(){

    const { workCounter, updateState } = this.props;

    // add input area for new work section
    this.setState(prevState => ({
      workForms: {...prevState.workForms,
        workCounter : <WorkExperienceForm updateState={updateState} handleDelete={this.handleDelete} id={workCounter} key={workCounter}/>}
    }));
    
    // add new section to parent state, which will then show its output
    this.props.addWork()
  }

  handleDelete(sectionType, id){
    // remove section from App.js state
    this.props.handleDelete(sectionType, id);

    // remove section's input area from DOM
    if (sectionType === 'Education'){
      let state = {...this.state};
      delete state['educationForms'][id];
      this.setState(state);
    }
    else if (sectionType === 'Work Experience'){
      let state = {...this.state};
      delete state['workForms'][id];
      this.setState(state);
    }
  }

  render(){

    return (
      <div className="UserInput">
        <BasicInfoForm updateState={this.props.updateState}/>
        {Object.values(this.state.educationForms)}
        <button onClick={this.onClickEducation}>Add new education</button>
        {Object.values(this.state.workForms)}
        <button onClick={this.onClickWork}>Add new work</button>
      </div> 
    )
  }
}

export default UserInput;