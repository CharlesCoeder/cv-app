import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.changeToBasicInfo = this.changeToBasicInfo.bind(this);
        this.changeToEducation = this.changeToEducation.bind(this);
        this.changeToWork = this.changeToWork.bind(this);
    }

    changeToBasicInfo(){
        this.props.changePage('basicInfoPage');
    }

    changeToEducation(){
        this.props.changePage('educationPage');
    }

    changeToWork(){
        this.props.changePage('workPage');
    }

    render(){
        return (
            <div className='sidebar'>
                <ul className='list'>
                    <li onClick={this.changeToBasicInfo}>Basic Information</li>
                    <li onClick={this.changeToEducation}>Education</li>
                    <li onClick={this.changeToWork}>Work Experience</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;