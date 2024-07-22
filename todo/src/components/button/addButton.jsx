import React from "react";
import style from "./addButton.module.css";

export default function AddButton({ onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      Add
    </button>
  );
}
