import React from 'react';
import Labels from './Labels';

function TotalCost({ totalCost }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Total Cost" />
      </div>
      {totalCost.map((total, index) => {
        return (
          <span className="placement-element" key={index}>
            ${total}
          </span>
        );
      })}
    </div>
  );
}

export default TotalCost;
