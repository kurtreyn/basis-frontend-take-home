import React from 'react';
import Labels from './Labels';

function EndDate({ placements }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="End Date" />
      </div>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            {new Date(placement.end).toLocaleDateString('en-US')}
          </span>
        );
      })}
    </div>
  );
}

export default EndDate;
