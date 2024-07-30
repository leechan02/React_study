import React from "react";
import style from "./list.module.css";
import Todo from "./todo";

export default function List({filter, todos, handleUpdate, handleDelete}) {

  const filtered = getFilteredItems(todos, filter);

  return (
    <div className={style.container}>
      {filtered.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") return todos;
  return todos.filter((todo) => todo.status === filter);
}
