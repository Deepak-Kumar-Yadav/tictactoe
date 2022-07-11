import React from 'react';

export default function Status({ winner, current }) {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isNext ? 'X' : 'O'}`;
  const noMovesLeft = current.board.every(val => {
    return val !== null ? true : false;
  });
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isNext ? 'text-green' : 'text-orange'}>
            {current.isNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && `Game is tied`}
    </div>
  );
}
