// Modules
import React from "react";
import { Link, withRouter } from "react-router-dom";
//SASS
import styles from "./Header.module.scss";
//Components
import SearchBar from "./SearchBar/SearchBar";
//Assets
import tg from "../../../assets/taeguk.png";

function Header(props) {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.Filter} />
      <div className={styles.Logo}>
        <img
          src={tg}
          alt={tg}
          onClick={() => {
            props.history.push("/");
          }}
        />
        <Link to="/">
          <h1>K-Lang Blog</h1>
        </Link>
      </div>

      <SearchBar />
    </div>
  );
}

export default withRouter(Header);
