import React from 'react';
import Labels from './Labels';
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
    <div className="row all-totals-row">
      <div className="col all-totals-col">
        {!totalStartDates ? 'Loading' : totalStartDates}
      </div>
      <div className="col all-totals-col">
        {!totalEndDates ? 'Loading' : totalEndDates}
      </div>
      <div className="col all-totals-col">
        {!totalImpressions ? 'Loading' : totalImpressions}
      </div>
      <div className="col all-totals-col">
        {!totalCostPerMile ? 'Loading' : totalCostPerMile}
      </div>
      <div className="col all-totals-col">
        {!totalAllCost ? 'Loading' : totalAllCost}
      </div>
    </div>
  );
}

export default AllTotals;
