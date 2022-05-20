import React from 'react';
import Labels from './Labels';
import { useSelector } from 'react-redux';

function AllTotals() {
  const {
    startDates,
    // endDates,
    // sumImpressions,
    // totalCost,
    // impressionCost,
    // costPerMile,
  } = useSelector((state) => state.Reducer);
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Totals" />
      </div>
      {!startDates
        ? 'Loading'
        : startDates.map((startDate, index) => {
            return (
              <span className="placement-element" key={index}>
                {startDate}
              </span>
            );
          })}
    </div>
  );
}

export default AllTotals;
