import React from 'react';

function Labels({ title }) {
  return (
    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 labels-col">
      <span className="spanlacement-title">{title}</span>
    </div>
  );
}

export default Labels;
