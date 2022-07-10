import React from 'react';

export default function History({ history, moveTo, currentPosition }) {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li>
            <button
              type="button"
              style={{
                fontWeight: move === currentPosition ? 'bold' : 'normal',
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to game start' : `Go to #${move} step`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
