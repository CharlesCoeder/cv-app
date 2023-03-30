import React, { Component } from 'react';

class BasicInfo extends Component {

  render(){

    const firstName = this.props.data['First Name'];
    const lastName = this.props.data['Last Name'];
    const city = this.props.data['City']
    const state = this.props.data['State']
    const zip = this.props.data['Zip']
    const email = this.props.data['Email']
    const phone = this.props.data['Phone Number']

    return (
      <div className="basicInformation">
        <div className="name">{firstName} {lastName}</div>
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
        <div className="address">
          <div className="city">{city}</div>
          <div className="state">{state}</div>
          <div className="zip">{zip}</div>
        </div>
      </div> 
    )
  }
}

export default BasicInfo;