import React from 'react';
import { useSelector } from 'react-redux';
// import Labels from './Labels';
import Impressions from './Impressions';
import StartDate from './StartDate';
import EndDate from './EndDate';
import CPM from './CPM';
import TotalCost from './TotalCost';
import Name from './Name';
import Loading from './Loading';
import Labels from './Labels';

function PlacementContainer() {
  const { placements, impressions } = useSelector((state) => state.Reducer);
  // if (placements && impressions) {
  //   console.log('placements in PlacementContainer component', placements);
  //   console.log('impressions in PlacementContainer component', impressions);
  // } else {
  //   console.log('NOT IN PLACEMENT CONTAINER');
  // }

  return (
    <div className="placement-container">
      <div className="row">
        {!placements && !impressions ? (
          <Loading />
        ) : (
          <>
            <Name placements={placements} />
            <StartDate placements={placements} />
            <EndDate placements={placements} />
            <Impressions impressions={impressions} />
            <CPM placements={placements} />
            <TotalCost impressions={impressions} />
          </>
        )}
      </div>
    </div>
  );
}

export default PlacementContainer;
