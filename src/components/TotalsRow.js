import React from 'react';

function TotalsRow({ element, dollarSign }) {
  return (
    <span className="placement-element">
      {dollarSign}
      {element}
    </span>
  );
}

export default TotalsRow;
