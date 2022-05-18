import React from 'react';

function Name({ placements }) {
  return (
    <div className="placement-div">
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
