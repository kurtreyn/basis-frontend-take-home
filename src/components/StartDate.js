import React from 'react';
import Labels from './Labels';

function StartDate({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <div className="row placements-row" key={index}>
            <span className="placement-element">
              {new Date(placement.start).toLocaleDateString('en-US')}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default StartDate;
