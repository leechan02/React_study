import React from "react";
import style from "../css/stateButton.module.css";

export default function StateButton({ txt }) {
  return (
    <div className={style.container}>
      <button className={style.text}>{txt}</button>
      <div className={style.bar}></div>
    </div>
  );
}
