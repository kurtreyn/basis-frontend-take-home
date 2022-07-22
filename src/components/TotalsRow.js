import React from 'react';

function TotalsRow({ element, dollarSign }) {
  return (
    <span className="total-row-text">
      {dollarSign}
      {element}
    </span>
  );
}

export default TotalsRow;
