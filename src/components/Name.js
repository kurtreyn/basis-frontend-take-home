import React from 'react';

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
