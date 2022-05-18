import React, { useState, useEffect } from 'react';
import PlacementContainer from './PlacementContainer';
import Filter from './Filter';
import Totals from './Totals';

function Main({ placements, impressions, totalCost }) {
  console.log(placements);
  const [cpmFilter, setCpmFilter] = useState(0);
  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');
  const [impressionFilter, setImpressionFilter] = useState(0);
  const [totalCostFilter, setTotalCostFilter] = useState(0);
  const [nameFilter, setNameFilter] = useState('');

  // function setInitialValues(tc) {
  //   let cpmTotals = tc.reduce((a, b) => a + b);
  //   setCpmFilter(cpmTotals);
  // }

  // useEffect(() => {
  //   setInitialValues(totalCost);
  // }, []);

  // console.log(cpmFilter);

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
      />
    </div>
  );
}

export default Main;
