import React from 'react';

export default function Status({ winner, current }) {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isNext ? 'X' : 'O'}`;
  const noMovesLeft = current.board.every(val => {
    return val !== null ? true : false;
  });
  return (
    <h1>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `Game is tied`}
    </h1>
  );
}
