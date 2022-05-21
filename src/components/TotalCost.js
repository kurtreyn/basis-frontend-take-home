import React from 'react';

function TotalCost({ totalCost }) {
  return (
    <>
      {totalCost.map((total, index) => {
        return (
          <span className="placement-element" key={index}>
            ${total.toLocaleString()}
          </span>
        );
      })}
    </>
  );
}

export default TotalCost;
