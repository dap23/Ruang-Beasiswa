import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useStore from "../../store/store";

const Navbar = () => {
  const currentUser = useStore((state) => state.currentUser);
  const logout = useStore((state) => state.logout);

  return (
    <div className={styles.container}>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <div className={styles.left}>
          <img src={Logo} alt="" />
          <h3>Ruang Beasiswa</h3>
        </div>
      </Link>
      <div className={styles.right}>
        {currentUser.data ? (
          <>
            <Link
              to={`/profile/${currentUser?.data?.id}`}
              style={{ textDecoration: "none", color: "inherit" }}>
              <p>Hi, {currentUser?.data?.username}</p>
            </Link>
            <span onClick={() => logout()}>Sign Out</span>
          </>
        ) : (
          <>
            <span>
              <Link
                to="/auth/login"
                style={{ color: "inherit", textDecoration: "none" }}>
                Sign In
              </Link>
            </span>

            <span>
              <Link
                to="/auth/register"
                style={{ color: "inherit", textDecoration: "none" }}>
                Sign Up
              </Link>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
