import React from "react";
import upper from "./Upper.module.css"
import CloseMenu from './components/closeMenu';
import MenuBar from "./components/menuBar";
import List from "./components/list";

export default function Upper() {
  return (
    <div className={upper.container}>
      <CloseMenu />
      <MenuBar />
      <List />
    </div>
  );
}