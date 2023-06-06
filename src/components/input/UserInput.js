import React, { Component } from 'react';
import BasicInfoPage from './pages/BasicInfoPage';
import EducationPage from './pages/EducationPage';
import WorkPage from './pages/WorkPage';
import PageDisplayer from './PageDisplayer';
import Sidebar from './Sidebar';

class UserInput extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      currentPage : 'basicInfoPage',
      educationFormIDs : [0],
      workFormIDs : [0],
    }

    this.changePage = this.changePage.bind(this);
    this.addEducationForm = this.addEducationForm.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.removeFormID = this.removeFormID.bind(this);
  }

  addEducationForm(){
    this.setState(prevState => ({
      educationFormIDs : [...prevState.educationFormIDs, this.props.educationCounter]
    }))
  }

  addWorkForm(){
    this.setState(prevState => ({
      workFormIDs : [...prevState.workFormIDs, this.props.workCounter]
    }))
  }

  changePage(newPage){
    this.setState({ currentPage : newPage });
  }

  removeFormID(key, id){
    this.setState(prevState => ({
      [key]: prevState[key].filter(formID => formID !== id),
    }));
  }

  render(){
    let page;
    switch(this.state.currentPage) {
      case 'basicInfoPage':
        page = <BasicInfoPage updateState={this.props.updateState} />
        break;
      case 'educationPage':
        page = <EducationPage formIDs={this.state.educationFormIDs} removeFormID={this.removeFormID} updateState={this.props.updateState} handleDelete={this.props.handleDelete} addEducationOutput={this.props.addEducation} addEducationForm={this.addEducationForm}/>
        break;
      case 'workPage':
        page = <WorkPage formIDs={this.state.workFormIDs} removeFormID={this.removeFormID} updateState={this.props.updateState} handleDelete={this.props.handleDelete} addWorkOutput={this.props.addWork} addWorkForm={this.addWorkForm} />
        break;
      default:
        page = <BasicInfoPage updateState={this.props.updateState} />
    }

    return (
      <div className="UserInput">
        <Sidebar changePage={this.changePage}/>
        <PageDisplayer page={page}/>
      </div> 
    )
  }
}

export default UserInput;