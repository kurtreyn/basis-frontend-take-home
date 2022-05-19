import React from 'react';
import Labels from './Labels';
import { useSelector } from 'react-redux';

function TotalCost() {
  const { placements, impressions } = useSelector((state) => state.Reducer);

  if (impressions) {
    console.log('impressions in TotalCost component', impressions);
  } else {
    console.log('NOT IN TOTALCOST COMPONENT');
  }

  // let impressionCost = impressions.map((impression) => {
  //   return impression / 1000;
  // });
  // let cpm = placements.map((placement) => {
  //   return placement.cpm;
  // });
  // let totalCost = [];
  // for (let i = 0; i < impressionCost.length; i++) {
  //   totalCost.push(Math.round(impressionCost[i] * cpm[i]));
  // }
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Total Cost" />
      </div>
      {/* {totalCost.map((total, index) => {
        return (
          <span className="placement-element" key={index}>
            ${total}
          </span>
        );
      })} */}
    </div>
  );
}

export default TotalCost;
