import React from 'react';
import Filter from './Filter';
import Table from './Table';
import '../styles/mainStyle.css';

export default function Main() {
  return (
    <div className="main-container">
      <Filter />
      <Table />
    </div>
  );
}
