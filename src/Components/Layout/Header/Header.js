// Modules
import React from "react";
import { Link } from "react-router-dom";
//Sass
import styles from "./Header.module.scss";
//Components
import SearchBar from "./SearchBar/SearchBar";
//Assets
import tg from "../../../assets/taeguk.png";
// import hangeulBg from "../../../assets/earlyhangeultrans.png";

export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.Filter} />
      <div className={styles.Logo}>
        <img src={tg} alt={tg} />
        <Link to="/">
          <h1>K-Lang Blog</h1>
        </Link>
      </div>

      <SearchBar />
    </div>
  );
}
