import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import './Styles/root.scss';
import calculateWinner from './helper';
import Status from './Components/Status';

export default function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: false },
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const current = history[currentPosition];
  const winner = calculateWinner(current.board);

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
    setCurrentPosition(previous => previous + 1);
  };

  const moveTo = move => {
    setCurrentPosition(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Status winner={winner} current={current} />
      <Board board={current.board} handlingClick={handlingClick} />
      <History
        history={history}
        moveTo={moveTo}
        currentPosition={currentPosition}
      />
    </div>
  );
}
