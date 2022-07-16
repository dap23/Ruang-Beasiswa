import React from "react";
import styles from "./partner.module.scss";
import Lpdp from "../../assets/lpdp.png";
import Rg from "../../assets/rg.png";
import Djarum from "../../assets/djarum.png";

const Partner = () => {
  return (
    <div className={styles.container}>
      <h3>Our Partner</h3>
      <div className={styles.wrapper}>
        <img src={Lpdp} alt="" />
        <img src={Rg} alt="" />
        <img src={Djarum} alt="" />
      </div>
    </div>
  );
};

export default Partner;
