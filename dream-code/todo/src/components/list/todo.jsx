import React from "react";
import style from "../css/todo.module.css";
import CheckButton from "./checkButton";
import DeleteButton from "./deleteButton";

export default function Todo({isCheck, msg}) {
  return (
    <div className={style.container}>
      <div className={style.checkBox}>
        <CheckButton isCheck={isCheck} />
        <div className={style.txt}>{msg}</div>
      </div>
      <DeleteButton />
    </div>
  );
}
