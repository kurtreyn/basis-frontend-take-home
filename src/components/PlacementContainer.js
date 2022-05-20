import React from 'react';
import { useSelector } from 'react-redux';
import Impressions from './Impressions';
import StartDate from './StartDate';
import EndDate from './EndDate';
import CPM from './CPM';
import TotalCost from './TotalCost';
import Name from './Name';
import Loading from './Loading';
import AllTotals from './AllTotals';
import Filter from './Filter';
// import Labels from './Labels';

function PlacementContainer() {
  const {
    placements,
    impressions,
    sumImpressions,
    costPerMile,
    impressionCost,
    startDates,
    endDates,
    totalCost,
  } = useSelector((state) => state.Reducer);

  return (
    <div className="placement-container">
      <div className="row">
        {!placements && !impressions ? (
          <Loading />
        ) : (
          <>
            <Filter />
            <Name placements={placements} />
            <StartDate placements={placements} />
            <EndDate placements={placements} />
            <Impressions sumImpressions={sumImpressions} />
            <CPM placements={placements} />
            <TotalCost totalCost={totalCost} />
          </>
        )}
      </div>
    </div>
  );
}

export default PlacementContainer;
