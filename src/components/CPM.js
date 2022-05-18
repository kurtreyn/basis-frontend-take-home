import React from 'react';

function CPM({ placements }) {
  return (
    <div className="col placement-col">
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            ${placement.cpm}
          </span>
        );
      })}
    </div>
  );
}

export default CPM;