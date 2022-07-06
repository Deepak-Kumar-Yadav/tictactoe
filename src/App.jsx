import React, { useState } from 'react';
import Board from './Components/Board';
import './Styles/root.scss';
import calculateWinner from './helper';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isNext ? 'X' : 'O'}`;

  const handlingClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(preVal => {
      return preVal.map((val, pos) => {
        const res = position === pos ? (isNext ? 'X' : 'O') : val;
        return res;
      });
    });
    setIsNext(previous => !previous);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h1>{message}</h1>
      <Board board={board} handlingClick={handlingClick} />
    </div>
  );
}
