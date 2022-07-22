import React from 'react';
import { useSelector } from 'react-redux';

function EndDate() {
  const { placements } = useSelector((state) => state.Reducer);
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-el primary-text" key={index}>
            {new Date(placement.end).toLocaleDateString('en-US')}
          </span>
        );
      })}
    </>
  );
}

export default EndDate;
