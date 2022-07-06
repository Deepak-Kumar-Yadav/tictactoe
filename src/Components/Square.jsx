import React from 'react';

export default function Square({ value, onClick }) {
  const handleSquareClick = () => {};
  return (
    <>
      <button type="button" className="square" onClick={onClick}>
        {value}
      </button>
    </>
  );
}
