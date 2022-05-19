import React from 'react';
import Labels from './Labels';
import { useSelector } from 'react-redux';

function Impressions({ impressions }) {
  if (impressions) {
    console.log('impressions in Impressions component', impressions);
  } else {
    console.log('NOT IN IMPRESSIONS COMPONENT');
  }
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Impressions" />
      </div>
      {/* {impressions.map((impression, index) => {
        return (
          <span className="placement-element" key={index}>
            {impression}
          </span>
        );
      })} */}
    </div>
  );
}

export default Impressions;
