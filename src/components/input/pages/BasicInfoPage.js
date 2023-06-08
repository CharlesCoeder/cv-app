 import React from "react";
import PropTypes from "prop-types";
import BasicInfoForm from "../forms/BasicInfoForm";

function BasicInfoPage(props) {
  const { updateState, data } = props;
  return (
    <div>
      <BasicInfoForm updateState={updateState} data={data[0]} />
    </div>
  );
}

const basicInfoPropType = PropTypes.shape({
  "First Name": PropTypes.string,
  "Last Name": PropTypes.string,
  "Email": PropTypes.string,
  "Phone Number": PropTypes.string,
  City: PropTypes.string,
  State: PropTypes.string,
  "Zip": PropTypes.string,
});


BasicInfoPage.propTypes = {
  updateState: PropTypes.func.isRequired,
  data: basicInfoPropType.isRequired,
};

export default BasicInfoPage;
