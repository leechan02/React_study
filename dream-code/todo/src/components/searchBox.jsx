import React from "react";
import box from "../css/searchBox.module.css";
import AddButton from './addButton';
import {CiSearch} from 'react-icons/ci';

export default function SearchBox() {
  return (
    <div className={box.box}>
      <div className={box.frame}>
        <CiSearch className={box.icon} />
        <input type="text" className={box.search} placeholder="Add Todo" />
      </div>
      <AddButton />
    </div>
  );
}