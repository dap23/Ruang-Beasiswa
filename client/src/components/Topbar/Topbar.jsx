import React from "react";
import styles from "./topbar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3>Hi, Ronaldo</h3>
        <p>Let’s see what scholarship you have been added today!</p>
      </div>
      <div className={styles.right}>
        <div className={styles.inputGroup}>
          <AiOutlineSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
