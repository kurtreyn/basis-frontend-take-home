import React from 'react';
import '../styles/datePickerStyle.css';

export default function DatePicker({ value, dateId, placeholder, onChange }) {
  return (
    <form action="" className="date-picker">
      <label htmlFor="start-date" className="form-label">
        {placeholder}
      </label>
      <input type="date" id={dateId} value={value} onChange={onChange} />
    </form>
  );
}
