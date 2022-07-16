import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
