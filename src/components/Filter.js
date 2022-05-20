import React from 'react';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';

function Filter() {
  const {
    startDates,
    endDates,
    sumImpressions,
    totalCost,
    impressionCost,
    costPerMile,
  } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  return (
    <div className="row filter-row">
      <div className="col filter-col">
        <form>
          <input className="form-input" placeholder="Start Date" />
        </form>
      </div>
      <div className="col filter-col">
        <form>
          <input className="form-input" placeholder="End Date" />
        </form>
      </div>
      <div className="col filter-col">
        <Button />
      </div>
    </div>
  );
}

export default Filter;
