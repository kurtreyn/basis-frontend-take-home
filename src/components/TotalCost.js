import React from 'react';

function TotalCost({ totalCost }) {
  return (
    <>
      {!totalCost
        ? 'Loading'
        : totalCost.map((total, index) => {
            return (
              <div className="row placement-row" key={index}>
                <span className="placement-element">${total}</span>
              </div>
            );
          })}
    </>
  );
}

export default TotalCost;
