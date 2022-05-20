import React from 'react';
import Labels from './Labels';

function CPM({ placements }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="CPM" />
      </div>
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
