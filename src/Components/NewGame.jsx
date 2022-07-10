import React from 'react';

export default function NewGame({ restart }) {
  return (
    <button type="button" onClick={restart}>
      New Game
    </button>
  );
}
