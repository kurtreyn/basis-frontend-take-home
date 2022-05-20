import React, { useEffect } from 'react';

function Totals({ placements }) {
  return (
    <div className="row totals-row">
      <span>Total</span>
      {/* <span>${totalCost.reduce((a, b) => a + b)}</span> */}
    </div>
  );
}

export default Totals;
