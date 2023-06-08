import React from "react";
import PropTypes from "prop-types";

function BasicInfo(props) {
  const {
    data: {
      "First Name": firstName,
      "Last Name": lastName,
      City: city,
      State: state,
      Zip: zip,
      Email: email,
      "Phone Number": phone,
    },
  } = props;

  return (
    <div className="basicInformation">
      <div className="name">
        {firstName} {lastName}
      </div>
      <div className="info">
        {email} | {phone} | {city}, {state}, {zip}
      </div>
    </div>
  );
}

BasicInfo.propTypes = {
  data: PropTypes.shape({
    "First Name": PropTypes.string.isRequired,
    "Last Name": PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    State: PropTypes.string.isRequired,
    Zip: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    "Phone Number": PropTypes.string.isRequired,
  }).isRequired,
};

export default BasicInfo;
