import React from "react";

export default function Button({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-brand py-2 px-4 text-white rounded-sm hover:brightness-110 flex justify-center items-center cursor-pointer"
    >
      {text}
    </div>
  );
}
