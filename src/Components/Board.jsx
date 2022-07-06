import React from 'react';
import Square from './Square';

export default function Board({ board, handlingClick }) {
  return (
    <div className="board">
      <div className="board-row">
        <Square
          value={board[0]}
          onClick={() => {
            handlingClick(0);
          }}
        />
        <Square
          value={board[1]}
          onClick={() => {
            handlingClick(1);
          }}
        />
        <Square
          value={board[2]}
          onClick={() => {
            handlingClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={board[3]}
          onClick={() => {
            handlingClick(3);
          }}
        />
        <Square
          value={board[4]}
          onClick={() => {
            handlingClick(4);
          }}
        />
        <Square
          value={board[5]}
          onClick={() => {
            handlingClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={board[6]}
          onClick={() => {
            handlingClick(6);
          }}
        />
        <Square
          value={board[7]}
          onClick={() => {
            handlingClick(7);
          }}
        />
        <Square
          value={board[8]}
          onClick={() => {
            handlingClick(8);
          }}
        />
      </div>
    </div>
  );
}
