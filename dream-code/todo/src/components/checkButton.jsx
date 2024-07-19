import React from "react";
import style from "../css/checkButton.module.css";
import unCheck from "../unCheck.svg"
import Check from "../Check.svg"

export default function CheckButton({isCheck}) {
  return (
    <button className={style.container}>
      <img src={isCheck ? Check : unCheck} alt="checkButton" />
    </button>
  );
}