import React from "react";
import PropTypes from "prop-types";
import BasicInfoForm from "../forms/BasicInfoForm";

function BasicInfoPage(props) {
  const { updateState } = props;
  return (
    <div>
      <BasicInfoForm updateState={updateState} />
    </div>
  );
}

BasicInfoPage.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default BasicInfoPage;
