import React from 'react';
import Labels from './Labels';

function CPM({ placements }) {
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <div className="row placements-row" key={index}>
            <span className="placement-element" key={index}>
              ${placement.cpm}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default CPM;
