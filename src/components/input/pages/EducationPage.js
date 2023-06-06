import React, { Component } from 'react';
import EducationForm from '../forms/EducationForm';

class EducationPage extends Component {

    constructor(props){
        super(props);
    
        this.addEducation = this.addEducation.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (sectionType, id) => {
        // remove section's input area
        this.props.removeFormID('educationFormIDs', id);

        // remove section's output area
        this.props.handleDelete(sectionType, id);
    }

    addEducation(){
        // add input area for new education section
        this.props.addEducationForm();

        // add coresponding output area on resume
        this.props.addEducationOutput();
      }

    render(){
        const forms = this.props.formIDs.map(formID =>
            <EducationForm updateState={this.props.updateState} handleDelete={this.handleDelete} id={formID} key={formID}/>
        )
        
        return (
            <div>
                {forms}
                <button onClick={this.addEducation}>Add Education</button>
            </div>
        )
    }
}

export default EducationPage;