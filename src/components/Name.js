import React from 'react';
import Labels from './Labels';

function Name({ placements }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Name" />
      </div>
      {placements.map((placement, index) => {
        return (
          <span className="placement-element" key={index}>
            {placement.name}
          </span>
        );
      })}
    </div>
  );
}

export default Name;
