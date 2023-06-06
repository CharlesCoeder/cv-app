import React, { Component } from 'react';
import WorkForm from '../forms/WorkForm';

class WorkPage extends Component {

    constructor(props){
        super(props);

        this.addWork = this.addWork.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = (sectionType, id) => {
        // remove section's input area
        this.props.removeFormID('workFormIDs', id);

        // remove section's output area
        this.props.handleDelete(sectionType, id);
    }

    addWork(){
        // add input area for new work section
        this.props.addWorkForm();
        
        // add coresponding output area on resume
        this.props.addWorkOutput();
      }
    
    render(){
        const forms = this.props.formIDs.map(formID =>
            <WorkForm updateState={this.props.updateState} handleDelete={this.handleDelete} id={formID} key={formID}/>
        )
        
        return (
            <div>
                {forms}
                <button onClick={this.addWork}>Add Work</button>
            </div>
        )
    }
}

export default WorkPage;