import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setDelivery } from '../redux/actions';
import PlacementContainer from './PlacementContainer';

function Main({ placements }) {
  // const dispatch = useDispatch();
  const delivery = placements.map((item) => {
    return item.delivery;
  });

  let impressions = [];
  for (let i = 0; i < delivery.length; i++) {
    let arr = [];

    for (let j = 0; j < delivery[i].length; j++) {
      let nums = parseInt(delivery[i][j].impressions);
      arr.push(nums);
    }

    impressions.push(arr.reduce((a, b) => a + b));
    // setImpressions(arr.reduce((a, b) => a + b));
  }

  let impressionCost = impressions.map((impression) => {
    return impression / 1000;
  });
  let cpm = placements.map((placement) => {
    return placement.cpm;
  });
  let totalCost = [];
  for (let i = 0; i < impressionCost.length; i++) {
    totalCost.push(Math.round(impressionCost[i] * cpm[i]));
  }

  return (
    <div className="main-container">
      <PlacementContainer
        placements={placements}
        impressions={impressions}
        totalCost={totalCost}
      />
    </div>
  );
}

export default Main;
