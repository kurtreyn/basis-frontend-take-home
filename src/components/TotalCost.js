import React from 'react';
import { useSelector } from 'react-redux';

function TotalCost() {
  const { totalCost } = useSelector((state) => state.Reducer);
  return (
    <>
      {totalCost.map((total, index) => {
        return (
          <span className="placement-el primary-text" key={index}>
            ${total.toLocaleString()}
          </span>
        );
      })}
    </>
  );
}

export default TotalCost;
