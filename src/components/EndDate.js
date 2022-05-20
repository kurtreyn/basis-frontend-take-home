import React from 'react';
import Labels from './Labels';

function EndDate({ endDates }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="End Date" />
      </div>
      {!endDates
        ? 'Loading'
        : endDates.map((endDate, index) => {
            return (
              <span className="placement-element" key={index}>
                {endDate}
              </span>
            );
          })}
    </div>
  );
}

export default EndDate;
