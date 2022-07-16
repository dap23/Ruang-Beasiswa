import React, { useMemo } from "react";
import Chart from "../../components/Chart/Chart";
import Box from "../../components/Box/Box";
import styles from "./dashboard.module.scss";
import Users from "../../components/Users/Users";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Chart />
        <Box />
      </div>
      <div className={styles.bottom}>
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
