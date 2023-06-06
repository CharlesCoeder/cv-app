import React, { Component } from 'react';
import BasicInfoForm from '../forms/BasicInfoForm';

class BasicInfoPage extends Component {

    render(){
        return (
            <div>
                <BasicInfoForm updateState={this.props.updateState}/>
            </div>
        )
    }

}

export default BasicInfoPage;