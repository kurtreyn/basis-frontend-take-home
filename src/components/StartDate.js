import React from 'react';
import Labels from './Labels';

function StartDate({ startDates }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Start Date" />
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

export default StartDate;
