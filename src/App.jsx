import React, { useState } from 'react';
import Board from './Components/Board';
import History from './Components/History';
import './Styles/root.scss';
import calculateWinner from './helper';
import Status from './Components/Status';
import NewGame from './Components/NewGame';

export default function App() {
  const newGame = [{ board: Array(9).fill(null), isNext: false }];
  const [history, setHistory] = useState(newGame);
  const [currentPosition, setCurrentPosition] = useState(0);
  const current = history[currentPosition];
  const { winner, winnerSquares } = calculateWinner(current.board);

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

  const restart = () => {
    setHistory(newGame);
    setCurrentPosition(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <Status winner={winner} current={current} />
      <Board
        board={current.board}
        handlingClick={handlingClick}
        winnerSquares={winnerSquares}
      />
      <NewGame restart={restart} winner={winner} />
      <h2 style={{ fontWeight: 'normal' }}>Current Game History</h2>
      <History
        history={history}
        moveTo={moveTo}
        currentPosition={currentPosition}
      />
      <div className="bg-balls" />
    </div>
  );
}
