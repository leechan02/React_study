import React from "react";
import style from "./deleteButton.module.css";
import { FaTrashAlt } from 'react-icons/fa';

export default function DeleteButton({ todo, onDelete }) {
  const handleDelete = () => onDelete(todo);
  return (
    <span className={style.btn}>
      <button className={style.icon} onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </span>
  );
}
