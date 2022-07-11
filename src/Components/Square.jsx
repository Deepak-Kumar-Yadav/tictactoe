import React from 'react';

export default function Square({ value, onClick, isWinner }) {
  return (
    <>
      <button
        type="button"
        className={`square ${isWinner ? 'winning' : ''} ${
          value === 'X' ? 'text-green' : 'text-orange'
        }`}
        onClick={onClick}
        style={{ fontWeight: isWinner ? 'bold' : 'normal' }}
      >
        {value}
      </button>
    </>
  );
}
