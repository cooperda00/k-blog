//Modules
import React from "react";
//SASS
import styles from "./Body.module.scss";

const Body = props => {
  return <div className={styles.BodyContainer}>{props.children}</div>;
};

export default Body;
