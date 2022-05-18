import React, { useEffect } from 'react';
import Main from './components/Main';
import Loading from './components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setPlacements, setDelivery } from './redux/actions';
import './styles/style.css';

function App() {
  const { placements } = useSelector((state) => state.Reducer);
  const { delivery } = useSelector((state) => state.Reducer);
  const { loading } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  console.log(placements);

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

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Main placements={placements} loading={loading} />
      )}
    </div>
  );
}

export default App;
