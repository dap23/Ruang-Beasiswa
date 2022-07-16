import React from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Image from "../../assets/login.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";
import useStore from "../../store/store";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = useStore((state) => state.login);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

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
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/login",
        data: user,
        withCredentials: true,
      });
      login(res.data);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setError(true);
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
          <h3>Sign In</h3>
          {error && "Something Went Wrong"}
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <AiOutlineMail />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <BsKeyFill />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.button}>
              <button onClick={handleSubmit}>Sign In</button>
            </div>
            <p>
              Does not have an account?{" "}
              <Link className={styles.login} to="/auth/register">
                Sign Up
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

export default Login;
