import React from 'react';

export default function NewGame({ restart, winner }) {
  return (
    <button
      type="button"
      onClick={restart}
      className={`btn-reset ${winner ? 'active' : ''}`}
    >
      New Game
    </button>
  );
}
