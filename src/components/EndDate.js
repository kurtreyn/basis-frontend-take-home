import React from 'react';
import Labels from './Labels';

function EndDate({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <div className="row placements-row" key={index}>
            <span className="placement-element">
              {new Date(placement.end).toLocaleDateString('en-US')}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default EndDate;
