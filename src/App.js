import React, { useEffect } from 'react';
import Loading from './components/Loading';
import Main from './components/Main';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLoading,
  setPlacements,
  setImpressions,
  setSumImpressions,
  setCostPerMile,
  setTotalCost,
  setImpressionCost,
  setStartDates,
  setEndDates,
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalCostPerMile,
  setTotalAllCost,
} from './redux/actions';
import './styles/appStyle.css';

function App() {
  const { placements, loading } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  const fetchPlacements = async () => {
    dispatch(setLoading(true));
    fetch('http://localhost:3000/placements', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          // SET PLACEMENTS
          dispatch(setPlacements(data.results));
          // SET IMPRESSIONS
          let impress = data.results.map((placement) => {
            return placement.delivery.map((delivery) => {
              return parseInt(delivery.impressions);
            });
          });
          dispatch(setImpressions(impress));
          // SET SUM OF IMPRESSIONS
          let impressSum = impress.map((impression) => {
            return impression.reduce((accum, curVal) => accum + curVal, 0);
          });
          dispatch(setSumImpressions(impressSum));
          // SET COST PER MILE
          let cpm = data.results.map((placement) => {
            return parseInt(placement.cpm);
          });
          dispatch(setCostPerMile(cpm));
          // SET IMPRESSIONS COST
          let impressCost = impress.map((impression) => {
            return (
              impression.reduce((accum, curVal) => accum + curVal, 0) / 1000
            );
          });
          dispatch(setImpressionCost(impressCost));
          // SET TOTAL COST
          let tc = [];
          for (let i = 0; i < impressCost.length; i++) {
            tc.push(Math.round(impressCost[i] * cpm[i]));
          }
          dispatch(setTotalCost(tc));
          // SET START DATE
          let sd = data.results.map((placement) => {
            return new Date(placement.start).toLocaleDateString('en-US');
          });
          dispatch(setStartDates(sd));
          // SET END DATE
          let ed = data.results.map((placement) => {
            return new Date(placement.end).toLocaleDateString('en-US');
          });
          dispatch(setEndDates(ed));
          // SET TOTAL START DATE
          dispatch(setTotalStartDates(sd[0]));
          // SET TOTAL END DATE
          dispatch(setTotalEndDates(ed[ed.length - 1]));
          // SET TOTAL IMPRESSIONS
          dispatch(
            setTotalImpressions(
              impressSum.reduce((accum, curVal) => accum + curVal, 0)
            )
          );
          // SET TOTAL COST PER MILE
          dispatch(
            setTotalCostPerMile(
              cpm.reduce((accum, curVal) => accum + curVal, 0)
            )
          );
          // SET TOTAL ALL COST
          dispatch(
            setTotalAllCost(tc.reduce((accum, curVal) => accum + curVal, 0))
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchPlacements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placements.length]);

  return (
    <div className="app-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <PlacementContainer /> */}
          <Main />
        </>
      )}
    </div>
  );
}

export default App;
