import React from "react";
import DarkModeIcon from "../../img/LightMode.svg";
import LightModeIcon from "../../img/DarkMode.svg";
import style from "./menuBar.module.css";
import StateButton from "../button/stateButton";
import { useDarkMode } from "../../context/DarkModeContext";

export default function MenuBar({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={style.container}>
      <div className={style.menu}>
        {filters.map((value, index) => (
          <StateButton
            key={index}
            value={value}
            filter={filter}
            onClick={() => onFilterChange(value)}
          />
        ))}
      </div>
      <button className={style.btn} onClick={toggleDarkMode}>
        <img src={darkMode === true ? LightModeIcon : DarkModeIcon} alt="switch" className={style.icon}/>
      </button>
    </div>
  );
}
