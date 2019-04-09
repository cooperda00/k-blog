//Modules
import React from "react";
//SASS
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.Filter} />
      <div className={styles.SidebarContents}>
        <ul className={styles.ImportantPosts}>
          <li>Blog post 1</li>
          <li>Blog post 10</li>
          <li>Blog post 35</li>
          <li>Blog post 98</li>
        </ul>

        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li>FB</li>
          <li>IG</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
