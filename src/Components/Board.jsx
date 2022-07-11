import React from 'react';
import Square from './Square';

export default function Board({ board, handlingClick, winnerSquares }) {
  return (
    <div className="board">
      <div className="board-row">
        <Square
          value={board[0]}
          isWinner={winnerSquares.includes(0)}
          onClick={() => {
            handlingClick(0);
          }}
        />
        <Square
          value={board[1]}
          isWinner={winnerSquares.includes(1)}
          onClick={() => {
            handlingClick(1);
          }}
        />
        <Square
          value={board[2]}
          isWinner={winnerSquares.includes(2)}
          onClick={() => {
            handlingClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={board[3]}
          isWinner={winnerSquares.includes(3)}
          onClick={() => {
            handlingClick(3);
          }}
        />
        <Square
          value={board[4]}
          isWinner={winnerSquares.includes(4)}
          onClick={() => {
            handlingClick(4);
          }}
        />
        <Square
          value={board[5]}
          isWinner={winnerSquares.includes(5)}
          onClick={() => {
            handlingClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={board[6]}
          isWinner={winnerSquares.includes(6)}
          onClick={() => {
            handlingClick(6);
          }}
        />
        <Square
          value={board[7]}
          isWinner={winnerSquares.includes(7)}
          onClick={() => {
            handlingClick(7);
          }}
        />
        <Square
          value={board[8]}
          isWinner={winnerSquares.includes(8)}
          onClick={() => {
            handlingClick(8);
          }}
        />
      </div>
    </div>
  );
}
