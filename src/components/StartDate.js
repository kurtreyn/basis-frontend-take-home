import React from 'react';
import Labels from './Labels';

function StartDate({ placements }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Start Date" />
      </div>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            {new Date(placement.start).toLocaleDateString('en-US')}
          </span>
        );
      })}
    </div>
  );
}

export default StartDate;
