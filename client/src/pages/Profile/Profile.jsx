import React from "react";
import useStore from "../../store/store";
import styles from "./profile.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const path = useLocation().pathname.split("/")[2];

  const data = useStore((state) => state.currentUser.data);
  const [user, setUser] = useState({
    username: data?.username,
    email: data?.email,
    jenjang: data?.jenjang,
    kota: data?.kota,
    image: data?.image,
  });

  const logout = useStore((state) => state.logout);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      username: user?.username,
      email: user?.email,
      jenjang: user?.jenjang,
      kota: user?.kota,
      image: user?.image,
    };
    try {
      const res = await axios.put(`/user/${path}`, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.box}>
          <div className={styles.boxWrapper}>
            <img src={data?.image} alt="" />
            <div className={styles.text}>
              <h3>{data?.username}</h3>
              <p>{data?.role}</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <ul>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <li>Change Password</li>
            </Link>
            {data?.role === "admin" ? (
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "inherit" }}>
                <li>Dashboard</li>
              </Link>
            ) : (
              ""
            )}
            <li onClick={() => logout()}>Sign Out</li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <h1>Profile</h1>
        <div className={styles.wrapper}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={user?.username}
              id="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={user?.email}
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="jenjang">Jenjang</label>
            <input
              type="text"
              value={user?.jenjang}
              id="jenjang"
              name="jenjang"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="kota">Kota</label>
            <input
              type="text"
              value={user?.kota}
              id="kota"
              name="kota"
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
