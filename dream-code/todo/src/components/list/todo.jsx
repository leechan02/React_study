import React from "react";
import style from "./todo.module.css";
import CheckButton from "../button/checkButton";
import DeleteButton from "../button/deleteButton";

export default function Todo({todo, onUpdate, onDelete}) {
  return (
    <div className={style.container}>
      <div className={style.checkBox}>
        <CheckButton todo={todo} onUpdate={onUpdate}/>
        <div className={style.txt}>{todo.text}</div>
      </div>
      <span className={style.button}>
        <DeleteButton todo={todo} onDelete={onDelete}/>
      </span>
    </div>
  );
}
