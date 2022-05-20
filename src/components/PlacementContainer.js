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
import Labels from './Labels';
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
        <Filter />
      </div>
      <div className="row label-row">
        <div className="col">
          <Labels title="NAME" />
        </div>
        <div className="col">
          <Labels title="START DATE" />
        </div>
        <div className="col">
          <Labels title="END DATE" />
        </div>
        <div className="col">
          <Labels title="IMPRESSIONS" />
        </div>
        <div className="col">
          <Labels title="CPM" />
        </div>
        <div className="col">
          <Labels title="TOTAL COST" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Name placements={placements} />
        </div>
        <div className="col">
          <StartDate placements={placements} />
        </div>
        <div className="col">
          <EndDate placements={placements} />
        </div>
        <div className="col">
          <Impressions sumImpressions={sumImpressions} />
        </div>
        <div className="col">
          <CPM placements={placements} />
        </div>
        <div className="col">
          <TotalCost totalCost={totalCost} />
        </div>
      </div>
    </div>
  );
}

export default PlacementContainer;

{
  /* <div className="row">
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
</div> */
}
