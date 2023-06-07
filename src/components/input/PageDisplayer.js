import React from 'react';

function PageDisplayer(props) {
  const { page } = props;
  return (
    <div>
      {page}
    </div>
  );
}

export default PageDisplayer;
