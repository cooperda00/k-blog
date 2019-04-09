//Modules
import React from "react";
//Sass
import styles from "./Body.module.scss";

const Body = props => {
  return <div className={styles.BodyContainer}>{props.children}</div>;
};

export default Body;
