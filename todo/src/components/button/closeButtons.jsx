import React from "react";
import RoundButton from "./roundButton";
import style from "./closeButtons.module.css";

export default function CloseMenu() {
  return (
    <div className={style.container}>
      <RoundButton color="#FF5F57" />
      <RoundButton color="#FEBC2E" />
      <RoundButton color="#28C840" />
    </div>
  );
}
