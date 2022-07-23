import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalAllCost,
} from '../redux/actions';
import Button from './Button';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/filterStyle.css';

function Filter() {
  const { totalCostPerMile, placements } = useSelector(
    (state) => state.Reducer
  );
  const dispatch = useDispatch();
  // const [fromDate, setFromDate] = useState();
  // const [toDate, setToDate] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  let totalsRowObj = {
    totalStartDates: '',
    totalEndDates: '',
    totalImpressions: '',
    totalAllCost: '',
  };

  let deliveryArr = placements.map((placement) => {
    return placement.delivery.map((item) => {
      return item;
    });
  });
  deliveryArr = deliveryArr.flat();
  let dateArr = deliveryArr.map((item) => item.date);
  let impressionsArr = deliveryArr.map((item) => item.impressions);

  const handleClick = (e) => {
    e.preventDefault();
    let fromDate = new Date(from).toLocaleDateString('en-US');
    let toDate = new Date(to).toLocaleDateString('en-US');

    // eslint-disable-next-line no-unused-vars
    for (let date of dateArr) {
      if (dateArr.indexOf(fromDate) === -1 || dateArr.indexOf(toDate) === -1) {
        alert('Please select a valid date range');
        setFrom(null);
        setTo(null);
        return;
      }
    }
    let begin = dateArr.indexOf(fromDate);
    let end = dateArr.indexOf(toDate);
    let addingArrImpress = [];
    let addingArrTotalCost = [];
    for (let i = 0; i < impressionsArr.length; i++) {
      if (i >= begin && i <= end) {
        addingArrImpress.push(parseInt(impressionsArr[i]));
      }
    }
    let addingSumImpress = addingArrImpress.reduce(
      (accum, curVal) => accum + curVal,
      0
    );
    for (let i = 0; i < addingArrImpress.length; i++) {
      addingArrTotalCost.push(Math.round(addingArrImpress[i]));
    }
    let addingSumCost = addingArrTotalCost.reduce(
      (accum, curVal) => accum + curVal,
      0
    );
    let updatedTotalCost = Math.round(
      (addingSumCost / 1000) * totalCostPerMile
    );

    dispatch(setTotalStartDates(fromDate));
    dispatch(setTotalEndDates(toDate));
    dispatch(setTotalImpressions(addingSumImpress));
    dispatch(setTotalAllCost(updatedTotalCost));
  };

  return (
    <form className="filter-container">
      <div className="filter-row">
        <div className="filter-col start-date-col">
          <label htmlFor="start-date" className="form-label">
            Start Date
          </label>
          <DatePicker
            placeholderText={dateArr[0]}
            selected={from}
            isClearable={true}
            onChange={(date) => setFrom(date)}
          />
        </div>
        <div className="filter-col end-date-col">
          <label htmlFor="end-date" className="form-label">
            End Date
          </label>
          <DatePicker
            placeholderText={dateArr[dateArr.length - 1]}
            selected={from}
            isClearable={true}
            onChange={(date) => setTo(date)}
          />
        </div>
        <div className="col filter-button-col">
          <Button label="Apply" onClick={handleClick} />
        </div>
      </div>
    </form>
  );
}

export default Filter;
