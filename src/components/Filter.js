import React, { useState } from 'react';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalCostPerMile,
  setTotalAllCost,
} from '../redux/actions';

function Filter() {
  const {
    totalStartDates,
    totalEndDates,
    totalImpressions,
    totalCostPerMile,
    totalAllCost,

    placements,
  } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  let deliveryArr = placements.map((placement) => {
    return placement.delivery.map((item) => {
      return item;
    });
  });
  deliveryArr = deliveryArr.flat();

  const handleClick = (from, to) => {
    console.log('clicked');
  };
  console.log(totalStartDates, totalEndDates);

  return (
    <div className="row filter-row">
      <div className="col filter-col">
        <form>
          <label htmlFor="start-date" className="form-label">
            Start Date
          </label>
          <input
            className="form-input"
            type="date"
            id="start-date"
            onChange={(e) => dispatch(setTotalStartDates(e.target.value))}
          />
        </form>
        <div className="col filter-col">
          <form>
            <label htmlFor="end-date" className="form-label">
              End Date
            </label>
            <input
              className="form-input"
              type="date"
              id="end-date"
              onChange={(e) => dispatch(setTotalEndDates(e.target.value))}
            />
          </form>
        </div>
        <div className="col filter-col">
          <Button
            label="Apply"
            onClick={() => handleClick(totalStartDates, totalEndDates)}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
