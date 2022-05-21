import React from 'react';

function TotalsRow({ element, dollarSign }) {
  return (
    <div className="row placement-row">
      <span className="placement-element">
        {dollarSign}
        {element}
      </span>
    </div>
  );
}

export default TotalsRow;
