import React from 'react';
import { useSelector } from 'react-redux';

function Impressions() {
  const { sumImpressions } = useSelector((state) => state.Reducer);
  return (
    <>
      {sumImpressions.map((sumImpression, index) => {
        return (
          <span className="placement-el primary-text" key={index}>
            {sumImpression.toLocaleString()}
          </span>
        );
      })}
    </>
  );
}

export default Impressions;
