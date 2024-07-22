import React from "react";
import style from "./checkButton.module.css";
import unCheck from "../../img/unCheck.svg";
import Check from "../../img/Check.svg";

export default function CheckButton({ todo, onUpdate }) {
  const handleChange = (e) => {
    onUpdate({ ...todo, status: todo.status === "active" ? "completed" : "active" });
  };

  return (
    <button className={style.button} onClick={handleChange}>
      <img src={todo.status === "active" ? unCheck : Check} alt="checkButton" />
    </button>
  );
}
