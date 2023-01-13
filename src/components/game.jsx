import React, { useEffect, useState } from "react";
import { Board } from "./board";
import { Button } from "./button";

export function Game() {
  const INITIAL_BOARD = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [moves, setMoves] = useState(9);
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState("");

  const setCurrentPlayer = () => {
    setPlayer(player === "x" ? "o" : "x");
  };

  const movePlayer = (row, column) => {
    if (winner || moves == 0) return;
    if (board[row][column] !== "") return;
    const newBoard = [...board];
    newBoard[row][column] = player;
    setBoard(newBoard);

    const win = checkWin();
    console.log("win", win);
    if (win) {
      setWinner(player);
    }

    setMoves((move) => move - 1);
    setCurrentPlayer();
  };

  const resetGame = () => {
    const newBoard = [...INITIAL_BOARD];
    setBoard(newBoard);
    setMoves(9);
    setPlayer("x");
    setWinner("");
  };

  const checkWin = () => {
    return checkRows() || checkColumns() || checkDiagonals();
  };

  const checkRows = () => {
    return board.some((row) => row.every((cell) => cell === player));
  };

  const checkColumns = () => {
    const checked = board.map((row, index) => {
      const column = [board[0][index], board[1][index], board[2][index]];
      if(column.every((cell) => cell === player)){
        return true;
      }
    });
    return checked.some((column) => column === true);
  };

  const checkDiagonals = () => {
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];

    return (
      diagonal1.every((cell) => cell === player) ||
      diagonal2.every((cell) => cell === player)
    );
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-slate-700 text-slate-300">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center">Tic Tac Toe</h1>
        <h2 className="text-xl text-center">
          Jogando : <span className="uppercase">{player}</span>
        </h2>
      </div>
      <Board board={board} movePlayer={movePlayer} />

      <div>
        {winner && (
          <h2 className="text-2xl text-center uppercase">Vencedor: {winner}</h2>
        )}

        {moves == 0 && !winner && (
          <h2 className="text-2xl text-center">Empate</h2>
        )}
      </div>

      <Button action={() => resetGame()} text="Reset" />
    </div>
  );
}
