import React, { useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import userStore from "../../store/userStore";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const removeUser = userStore((state) => state.removeUser);
  const setUser = userStore((state) => state.setUser);
  const user = useAuth();

  const handleClick = async () => {
    const res = await axios.post("/logout");
    if (res.status === 200) {
      removeUser();
      navigate("/", {
        replace: true,
      });
    }
  };

  useEffect(() => {
    setUser();
  }, []);
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <div className="logo">
          <img src={Logo} alt="" />
          <h3>Ruang Beasiswa</h3>
        </div>
      </Link>
      <div className="menu">
        {user.username ? (
          <>
            <Link
              to={`/user/${user?.id}`}
              style={{ textDecoration: "none", color: "inherit" }}>
              <span>Hi, {user.username}</span>
            </Link>
            <button className="navbar-sign-out" onClick={handleClick}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              style={{ textDecoration: "none", color: "inherit" }}>
              <span className="sign-in">Sign In</span>
            </Link>
            <Link
              to="/auth/register"
              style={{ textDecoration: "none", color: "inherit" }}>
              <span className="sign-up">Sign Up</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
