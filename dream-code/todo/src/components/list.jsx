import React from "react";
import style from "../css/list.module.css";
import Todo from "./todo";

export default function List() {
  return (
    <div className={style.container}>
      <Todo isCheck={false} msg="buy milk" />
      <Todo isCheck={true} msg="running" />
    </div>
  );
}