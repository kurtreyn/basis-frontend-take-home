import React from 'react';

function TotalCost({ totalCost }) {
  return (
    <div className="col placement-col">
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
