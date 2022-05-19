import React, { useEffect } from 'react';
import Main from './components/Main';
import Loading from './components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setPlacements, setImpressions } from './redux/actions';
import './styles/style.css';

function App() {
  const { placements, impressions, loading } = useSelector(
    (state) => state.Reducer
  );
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
          dispatch(setPlacements(data.results));
        }
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchPlacements();
  }, [placements.length]);

  const impress = placements.map((placement) => {
    return placement.delivery.map((delivery) => {
      return parseInt(delivery.impressions);
    });
  });
  // dispatch(setImpressions(impress));

  // console.log(impress);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Main placements={placements} impress={impress} loading={loading} />
      )}
    </div>
  );
}

export default App;
