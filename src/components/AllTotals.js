import React from 'react';
// import Labels from './Labels';
import { useSelector } from 'react-redux';

function AllTotals() {
  const {
    totalStartDates,
    totalEndDates,
    totalImpressions,
    totalCostPerMile,
    totalAllCost,
  } = useSelector((state) => state.Reducer);

  return (
    <>
      <div className="col all-totals-col">{totalStartDates}</div>
      <div className="col all-totals-col">{totalEndDates}</div>
      <div className="col all-totals-col">{totalImpressions}</div>
      <div className="col all-totals-col">{totalCostPerMile}</div>
      <div className="col all-totals-col">{totalAllCost}</div>
    </>
  );
}

export default AllTotals;
