import React from 'react';

function Main({ placements }) {
  //   console.log(placements);

  return (
    <>
      <div>
        {placements.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
}

export default Main;
