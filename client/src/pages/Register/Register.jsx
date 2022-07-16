import React, { useRef, useState } from "react";
import styles from "./register.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Image from "../../assets/register.png";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdSchool, MdOutlineLocationOn } from "react-icons/md";
import { BsKeyFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    jenjang: "",
    kota: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: data.username,
      email: data.email,
      jenjang: data.jenjang,
      kota: data.kota,
      password: data.password,
    };
    try {
      const res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/register",
        data: user,
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <img src={Logo} alt="" />
        <h3>Ruang Beasiswa</h3>
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3>Sign Up</h3>
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <AiOutlineUser />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <AiOutlineMail />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <MdSchool />
              <input
                type="text"
                placeholder="Jenjang"
                name="jenjang"
                value={data.jenjang}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <MdOutlineLocationOn />
              <input
                type="text"
                placeholder="Domisili"
                name="kota"
                value={data.kota}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <BsKeyFill />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.button}>
              <button onClick={handleSubmit}>Sign Up</button>
            </div>
            <p>
              Already have an account?{" "}
              <Link className={styles.login} to="/auth/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
