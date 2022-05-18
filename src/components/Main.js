import React, { useState, useEffect } from 'react';
import PlacementContainer from './PlacementContainer';
import Filter from './Filter';
import Totals from './Totals';

function Main({ placements, impressions, totalCost, loading }) {
  // console.log(placements);
  const [cpmFilter, setCpmFilter] = useState(null);
  const [startDateFilter, setStartDateFilter] = useState(null);
  const [endDateFilter, setEndDateFilter] = useState(null);
  const [impressionFilter, setImpressionFilter] = useState(null);
  const [totalCostFilter, setTotalCostFilter] = useState(null);
  const [nameFilter, setNameFilter] = useState(null);
  console.log('loading is:', loading);

  return (
    <div className="main-container">
      <Filter
        placements={placements}
        impressions={impressions}
        cpmFilter={cpmFilter}
        setCpmFilter={setCpmFilter}
        startDateFilter={startDateFilter}
        setStartDateFilter={setStartDateFilter}
        endDateFilter={endDateFilter}
        setEndDateFilter={setEndDateFilter}
        impressionFilter={impressionFilter}
        setImpressionFilter={setImpressionFilter}
        totalCostFilter={totalCostFilter}
        setTotalCostFilter={setTotalCostFilter}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        totalCost={totalCost}
      />
      <PlacementContainer
        placements={placements}
        impressions={impressions}
        totalCost={totalCost}
      />
      <Totals
        placements={placements}
        impressions={impressions}
        cpmFilter={cpmFilter}
        setCpmFilter={setCpmFilter}
        startDateFilter={startDateFilter}
        setStartDateFilter={setStartDateFilter}
        endDateFilter={endDateFilter}
        setEndDateFilter={setEndDateFilter}
        impressionFilter={impressionFilter}
        setImpressionFilter={setImpressionFilter}
        totalCostFilter={totalCostFilter}
        setTotalCostFilter={setTotalCostFilter}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        totalCost={totalCost}
      />
    </div>
  );
}

export default Main;
