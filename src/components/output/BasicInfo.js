/* eslint react/jsx-one-expression-per-line: */// --> OFF
import React from 'react';

function BasicInfo(props) {
  const {
    data: {
      'First Name': firstName, 'Last Name': lastName, City: city, State: state, Zip: zip, Email: email, 'Phone Number': phone,
    },
  } = props;

  return (
    <div className="basicInformation">
      <div className="name">{firstName} {lastName}</div>
      <div className="info">{email} | {phone} | {city}, {state}, {zip}</div>
    </div>
  );
}

export default BasicInfo;
