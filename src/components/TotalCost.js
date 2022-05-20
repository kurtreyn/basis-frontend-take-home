import React from 'react';
import Labels from './Labels';

function TotalCost({ totalCost }) {
  return (
    <>
      {!totalCost
        ? 'Loading'
        : totalCost.map((total, index) => {
            return (
              <span className="placement-element" key={index}>
                ${total}
              </span>
            );
          })}
    </>
  );
}

export default TotalCost;
