import React from "react";
import button from "../css/roundButton.module.css";

export default function RoundButton({ color }) {
  return <button className={button.round} style={{ backgroundColor: color }}></button>;
}
