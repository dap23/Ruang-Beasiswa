import React, { useRef, useState } from "react";
import "./register.css";
import ImageRegister from "../../assets/register.png";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/Form/Form";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    jenjang: "",
    domisili: "",
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
      password: data.password,
      jenjang: data.jenjang,
      kota: data.kota,
    };
    await axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/register",
      data: user,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.code === 200) {
          setMessage(res.data.message);
          navigate("/auth/login");
        } else {
          setMessage(res.data.message);
        }
      })
      .catch((e) => {
        setMessage(e.response.data.message);
      });
  };

  return (
    <div className="register">
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
          <RegisterForm
            message={message}
            setMessage={setMessage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            data={data}
          />
        </div>
        <div className="right">
          <img src={ImageRegister} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
