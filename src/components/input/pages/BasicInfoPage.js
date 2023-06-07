import React from 'react';
import BasicInfoForm from '../forms/BasicInfoForm';

function BasicInfoPage(props) {
  const { updateState } = props;
  return (
    <div>
      <BasicInfoForm updateState={updateState} />
    </div>
  );
}

export default BasicInfoPage;
