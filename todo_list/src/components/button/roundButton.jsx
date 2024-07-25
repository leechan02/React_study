import React from "react";
import style from "./roundButton.module.css";

export default function RoundButton({ color }) {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: color }}
    ></button>
  );
}
