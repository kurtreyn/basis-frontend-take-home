import React from 'react';
import Labels from './Labels';

function EndDate({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            {new Date(placement.end).toLocaleDateString('en-US')}
          </span>
        );
      })}
    </>
  );
}

export default EndDate;
