import React from "react";
import styles from "./list.module.scss";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Top Category</h3>
      <ul>
        <li>
          <Link className={styles.link} to="/scholarship/cat/Daerah">
            Beasiswa Daerah
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/scholarship/cat/Kota">
            Beasiswa Kota
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/scholarship/cat/Nasional">
            Beasiswa Nasional
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
