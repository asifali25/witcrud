import React from "react";
import Styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={Styles.header}>
        <h1>Clients Panel</h1>
        <p>Client</p>
      </header>
    </>
  );
}

export default Header;
