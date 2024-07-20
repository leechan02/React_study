import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import AddButton from "./button/addButton";
import {v4 as uuidv4} from "uuid";
import style from "./searchBox.module.css";

export default function SearchBox({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({ id: uuidv4(), text, status: 'active'});
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.container}>
        <div className={style.box}>
          <CiSearch className={style.icon} />
          <input
            type="text"
            className={style.search}
            placeholder="Add Todo"
            value={text}
            onChange={handleChange}
          />
        </div>
        <AddButton onClick={handleSubmit}/>
      </div>
    </form>
  );
}
