import React from 'react';
import Button from './Button';

function Filter({
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
}) {
  return (
    <div className="row filter-row">
      <div className="col filter-col">Filter</div>
    </div>
  );
}

export default Filter;
