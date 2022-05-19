import React from 'react';
import Labels from './Labels';
import { useSelector } from 'react-redux';

function Impressions({ impressions }) {
  // if (impressions) {
  //   console.log('impressions in Impressions component', impressions);
  // } else {
  //   console.log('NOT IN IMPRESSIONS COMPONENT');
  // }

  // let impressionsSum = impressions.reduce((a, b) => a + b, 0);
  // console.log(impressionsSum);

  return (
    <div className="placement">
      <div className="label">
        <Labels title="Impressions" />
      </div>
      {/* {!impressions
        ? 'Loading'
        : impressions.map((impression, index) => {
            return (
              <span className="placement-element" key={index}>
                {impression.reduce((a, b) => a + b, 0)}
              </span>
            );
          })} */}
    </div>
  );
}

export default Impressions;
