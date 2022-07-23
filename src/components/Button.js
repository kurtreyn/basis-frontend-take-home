import React from 'react';
import '../styles/buttonStyle.css';

function Button({ label, onClick }) {
  return (
    <button data-testid="apply-btn" className="apply-btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
