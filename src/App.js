import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import './styles/style.css';

function App() {
  const [placements, setPlacements] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const fetchPlacements = async () => {
    setLoading(true);
    fetch('http://localhost:3000/placements', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setPlacements(data.results);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  return (
    <div className="App">
      <Main placements={placements} />
    </div>
  );
}

export default App;
