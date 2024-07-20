import React from "react";
import menuBar from "../css/menuBar.module.css";
import Menu from "./menu";
import DarkModeIcon from "../LightMode.svg";

export default function MenuBar(){
  return (
    <div className={menuBar.frame}>
      <Menu />
      <img src={DarkModeIcon} alt="switch" className={menuBar.img}/>
    </div>
  );
}