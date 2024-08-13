import React from "react";
import style from "./header.module.css";
import Logo from "../assets/task-vector-icon.jpg";

const Header = () => {
  return (
    <header>
      <div className={style.contents}>
        <img src={Logo} alt="Taskmate app logo" className={style.logo} />
        <h1 className={style.heading}>Taskmate</h1>
      </div>
      <div className={style.themeIcons}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
