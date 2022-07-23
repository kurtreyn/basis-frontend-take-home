import React from 'react';
import { useSelector } from 'react-redux';

function StartDate() {
  const { placements } = useSelector((state) => state.Reducer);
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-el primary-text" key={index}>
            {new Date(placement.start).toLocaleDateString('en-US')}
          </span>
        );
      })}
    </>
  );
}

export default StartDate;
