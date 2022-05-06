import React from 'react';

function Placement({ placements }) {
  return (
    <div>
      {placements.map((item) => {
        return (
          <div className="placement" key={item.id}>
            <span className="placement-element">{item.name}</span>
            <span className="placement-element">
              {new Date(item.start).toLocaleDateString('en-US')}
            </span>
            <span className="placement-element">
              {new Date(item.end).toLocaleDateString('en-US')}
            </span>
            <span className="placement-element">impressions</span>
            <span className="placement-element">{item.cpm}</span>
            <span className="placement-element">total cost</span>
          </div>
        );
      })}
    </div>
  );
}

export default Placement;
