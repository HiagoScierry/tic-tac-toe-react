import React from "react";

export function Square({ text, action }) {
  return (
    <div
      onClick={action}
      className="flex justify-center items-center w-24 h-24 border border-solid border-slate-300 rounded-md m-1 hover:bg-slate-600"
    >
      <p className="text-xl uppercase">{text}</p>
    </div>
  );
}
