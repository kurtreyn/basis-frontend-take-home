import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/nameStyle.css';

function Name() {
  const { placements } = useSelector((state) => state.Reducer);
  return (
    <div className="names-col">
      {placements.map((placement, index) => {
        return (
          <span className="placement-el primary-text" key={index}>
            {placement.name}
          </span>
        );
      })}
    </div>
  );
}

export default Name;
