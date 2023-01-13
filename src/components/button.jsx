import React from "react";

export function Button({ text, action }) {
  return (
    <div
      onClick={action}
      className="bg-slate-300 hover:bg-slate-200 text-slate-700 w-48 h-10 flex justify-center items-center rounded-md"
    >
      <p className="text-xl">{text}</p>
    </div>
  );
}
