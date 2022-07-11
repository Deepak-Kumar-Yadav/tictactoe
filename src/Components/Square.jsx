import React from 'react';

export default function Square({ value, onClick, isWinner }) {
  return (
    <>
      <button
        type="button"
        className="square"
        onClick={onClick}
        style={{ fontWeight: isWinner ? 'bold' : 'normal' }}
      >
        {value}
      </button>
    </>
  );
}
