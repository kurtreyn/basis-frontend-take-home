import React from 'react';

function TotalCost({ totalCost }) {
  return (
    <div className="placement-div">
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
