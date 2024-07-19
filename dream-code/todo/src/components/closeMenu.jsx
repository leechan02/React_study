import React from "react";
import closeMenu from "../css/closeMenu.module.css";
import RoundButton from "./roundButton";

export default function CloseMenu() {
  return (
    <div className={closeMenu.container}>
      <RoundButton color="#FF5F57" />
      <RoundButton color="#FEBC2E" />
      <RoundButton color="#28C840" />
    </div>
  );
}
