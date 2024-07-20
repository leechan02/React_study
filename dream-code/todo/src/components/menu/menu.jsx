import React from "react";
import menu from "../css/menu.module.css";
import StateButton from "./stateButton";

export default function Menu() {
  return (
    <div className={menu.bar}>
      <StateButton txt="All" />
      <StateButton txt="Active" />
      <StateButton txt="Completed" />
    </div>
  );
}