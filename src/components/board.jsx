import React from "react";
import { Square } from "./square";

export function Board({ board, movePlayer }) {
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div className="flex justify-evenly items-center" key={rowIndex}>
          {row.map((col, colIndex) => (
            <Square
              key={colIndex}
              action={() => movePlayer(rowIndex, colIndex)}
              text={col}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
