import React from 'react';

function StartDate({ placements }) {
  return (
    <div className="col placement-col">
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
