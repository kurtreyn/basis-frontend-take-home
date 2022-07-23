import React from 'react';
import { useSelector } from 'react-redux';

function CPM() {
  const { placements } = useSelector((state) => state.Reducer);
  return (
    <>
      {placements.map((placement, index) => {
        return (
          <span className="placement-el primary-text" key={index}>
            ${placement.cpm}
          </span>
        );
      })}
    </>
  );
}

export default CPM;
