import React from 'react';

function Totals({
  placements,
  impressions,
  cpmFilter,
  setCpmFilter,
  startDateFilter,
  setStartDateFilter,
  endDateFilter,
  setEndDateFilter,
  impressionFilter,
  setImpressionFilter,
  totalCostFilter,
  setTotalCostFilter,
  nameFilter,
  setNameFilter,
  totalCost,
}) {
  return (
    <div className="row totals-row">
      <span>Total</span>
      <span>${totalCost.reduce((a, b) => a + b)}</span>
    </div>
  );
}

export default Totals;
