import React from "react";
import styles from "./sidebar.module.scss";
import Logo from "../../assets/logo_white.png";
import { MdOutlineSpaceDashboard, MdOutlineSchool } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import useStore from "../../store/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = useStore((state) => state.currentUser.data);
  const logout = useStore((state) => state.logout);

  return (
    <div className={styles.container}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.title}>
          <img src={Logo} alt="" />
          <h3>Ruang Admin</h3>
        </div>
      </Link>
      <div className={styles.menu}>
        <ul>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <MdOutlineSpaceDashboard className={styles.icon} />
              Dashboard
            </li>
          </Link>
          <Link
            to="/dashboard/scholarship"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <MdOutlineSchool className={styles.icon} />
              Scholarship
            </li>
          </Link>
          <Link
            to="/dashboard/user"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <AiOutlineUser className={styles.icon} />
              User
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.profile}>
        <div className={styles.info}>
          <img src={data?.image} alt="" />
          <div className={styles.text}>
            <h3>{data?.username}</h3>
            <p>{data?.role}</p>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.signOut} onClick={() => logout()}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
