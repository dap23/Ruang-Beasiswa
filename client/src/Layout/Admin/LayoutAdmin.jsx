import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./layoutAdmin.module.scss";
import Topbar from "../../components/Topbar/Topbar";

const LayoutAdmin = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
