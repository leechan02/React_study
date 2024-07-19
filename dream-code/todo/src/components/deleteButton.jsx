import React from "react";
import style from "../css/deleteButton.module.css";
import Delete from "../delete.svg";

export default function DeleteButton() {
  return (
    <button className={style.btn}>
      <div className={style.back}>
        <img src={Delete} alt="icon" className={style.icon} />
      </div>
    </button>
  );
}
