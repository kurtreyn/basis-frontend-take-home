import React from 'react';
import Labels from './Labels';

function Name({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            {placement.name}
          </span>
        );
      })}
    </>
  );
}

export default Name;
