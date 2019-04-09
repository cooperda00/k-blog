// Modules
import React from "react";
import { Link } from "react-router-dom";
//Sass
import styles from "./Header.module.scss";
//Components
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <Link to="/">
        <h1>My Blog</h1>
      </Link>
      <SearchBar />
    </div>
  );
}
