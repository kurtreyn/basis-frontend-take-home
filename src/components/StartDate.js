import React from 'react';
import Labels from './Labels';

function StartDate({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            {new Date(placement.start).toLocaleDateString('en-US')}
          </span>
        );
      })}
    </>
  );
}

export default StartDate;
