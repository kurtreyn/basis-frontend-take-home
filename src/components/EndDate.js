import React from 'react';

function EndDate({ placements }) {
  return (
    <div className="placement-div">
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
