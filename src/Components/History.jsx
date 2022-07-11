import React from 'react';

export default function History({ history, moveTo, currentPosition }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li>
              <button
                type="button"
                className={`btn-move ${
                  move === currentPosition ? 'active' : ''
                }`}
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
    </div>
  );
}
