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
      <Labels title="TOTAL" />
      <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col all-totals-col">
        {totalStartDates}
      </div>
      <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col all-totals-col">
        {totalEndDates}
      </div>
      <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col all-totals-col">
        {totalImpressions}
      </div>
      <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col all-totals-col">
        ${totalCostPerMile}
      </div>
      <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col all-totals-col">
        ${totalAllCost}
      </div>
    </div>
  );
}

export default AllTotals;
