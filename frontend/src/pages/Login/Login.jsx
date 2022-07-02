import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logo from "../../assets/logo.png";
import ImageLogin from "../../assets/login.png";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Form/Form";
import axios from "axios";
import userStore from "../../store/userStore";

const Login = () => {
  const setUser = userStore((state) => state.setUser);
  const navigate = useNavigate();
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
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
      if (res.status === 200) {
        setUser();
        setMessage(res.data.message);
        navigate("/", {
          replace: true,
        });
      }
    } catch (error) {
      setMessage(error.message);
    }

    firstRef.current.value = "";
    secondRef.current.value = "";
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1f4690",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
              <img src={Logo} alt="" />
              <h3>Ruang Beasiswa</h3>
            </Link>
          </div>
          {message ? (
            <div className="error-msg">
              <h3>{message}</h3>
            </div>
          ) : (
            ""
          )}
          <LoginForm
            firstRef={firstRef}
            secondRef={secondRef}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="right">
          <img src={ImageLogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
