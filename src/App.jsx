import React, { useState } from 'react';
import Board from './Components/Board';
import './Styles/root.scss';
import calculateWinner from './helper';

export default function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: false },
  ]);
  const [currentPosition, setCurrent] = useState(0);
  const current = history[currentPosition];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isNext ? 'X' : 'O'}`;

  const handlingClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(preVal => {
      const last = preVal[preVal.length - 1];
      const newBoard = last.board.map((val, pos) => {
        const res = position === pos ? (last.isNext ? 'X' : 'O') : val;
        return res;
      });
      return preVal.concat([{ board: newBoard, isNext: !last.isNext }]);
    });
    setCurrent(previous => previous + 1);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h1>{message}</h1>
      <Board board={current.board} handlingClick={handlingClick} />
    </div>
  );
}
