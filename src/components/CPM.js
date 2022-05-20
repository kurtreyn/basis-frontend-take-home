import React from 'react';
import Labels from './Labels';

function CPM({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            ${placement.cpm}
          </span>
        );
      })}
    </>
  );
}

export default CPM;
