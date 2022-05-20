import React from 'react';
import Labels from './Labels';

function Name({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <div className="row placements-row" key={index}>
            <span className="placement-element">{placement.name}</span>
          </div>
        );
      })}
    </>
  );
}

export default Name;
