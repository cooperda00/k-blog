//Modules
import React from "react";
//SASS
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.SidebarContainer}>
      <ul>
        <li>Sidebar stuff</li>
        <li>Sidebar stuff</li>
      </ul>
    </div>
  );
};

export default Sidebar;
