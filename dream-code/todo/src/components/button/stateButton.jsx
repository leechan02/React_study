import React from "react";
import style from "./stateButton.module.css";

export default function StateButton({ value, filter, onClick }) {
  return (
    <div className={style.container}>
      <button
        className={`${style.text} ${filter === value && style.selected}`}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}
