import React, { useState } from 'react';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalAllCost,
} from '../redux/actions';
import '../styles/filterStyle.css';
import 'react-datepicker/dist/react-datepicker.css';

function Filter() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState(null);
  const { totalCostPerMile, placements } = useSelector(
    (state) => state.Reducer
  );
  // const dispatch = useDispatch();

  let deliveryArr = placements.map((placement) => {
    return placement.delivery.map((item) => {
      return item;
    });
  });
  deliveryArr = deliveryArr.flat();
  let dateArr = deliveryArr.map((item) => item.date);
  let impressionsArr = deliveryArr.map((item) => item.impressions);

  // const handleClick = (from, to) => {
  //   console.log('handleClick ran');
  //   from = new Date(from).toLocaleDateString('en-US');
  //   to = new Date(to).toLocaleDateString('en-US');

  //   // eslint-disable-next-line no-unused-vars
  //   for (let date of dateArr) {
  //     if (dateArr.indexOf(from) === -1 || dateArr.indexOf(to) === -1) {
  //       alert('Please select a valid date range');
  //       setFromDate(null);
  //       setToDate(null);
  //       return;
  //     }
  //   }
  //   let begin = dateArr.indexOf(from);
  //   let end = dateArr.indexOf(to);
  //   let addingArrImpress = [];
  //   let addingArrTotalCost = [];
  //   for (let i = 0; i < impressionsArr.length; i++) {
  //     if (i >= begin && i <= end) {
  //       addingArrImpress.push(parseInt(impressionsArr[i]));
  //     }
  //   }
  //   let addingSumImpress = addingArrImpress.reduce(
  //     (accum, curVal) => accum + curVal,
  //     0
  //   );
  //   for (let i = 0; i < addingArrImpress.length; i++) {
  //     addingArrTotalCost.push(Math.round(addingArrImpress[i]));
  //   }
  //   let addingSumCost = addingArrTotalCost.reduce(
  //     (accum, curVal) => accum + curVal,
  //     0
  //   );
  //   let updatedTotalCost = Math.round(
  //     (addingSumCost / 1000) * totalCostPerMile
  //   );

  //   dispatch(setTotalStartDates(from));
  //   dispatch(setTotalEndDates(to));
  //   dispatch(setTotalImpressions(addingSumImpress));
  //   dispatch(setTotalAllCost(updatedTotalCost));
  // };

  return (
    <form className="filter-container">
      <div className="filter-row">
        <div className="filter-col start-date-col">
          <label htmlFor="start-date" className="form-label">
            Start Date
          </label>
          <DatePicker
            placeholderText={dateArr[0]}
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
          />
        </div>
        <div className="filter-col end-date-col">
          <label htmlFor="end-date" className="form-label">
            End Date
          </label>
          <DatePicker
            placeholderText={dateArr[dateArr.length - 1]}
            selected={fromDate}
            onChange={(date) => setToDate(date)}
          />
        </div>
        <div className="filter-col filter-button-col">
          {/* <Button label="Apply" onClick={() => handleClick(fromDate, toDate)} /> */}
          <Button
            label="Apply"
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
        </div>
      </div>
    </form>
  );
}

export default Filter;
