import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo_white.png";
import { MdOutlineDashboard } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { BsNewspaper, BsThreeDotsVertical } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

import { Link, NavLink, useNavigate } from "react-router-dom";
import userStore from "../../store/userStore";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const user = useAuth();
  const navigate = useNavigate();
  const removeUser = userStore((state) => state.removeUser);

  const handleClick = async () => {
    const res = await axios.post("/logout");
    if (res.status === 200) {
      removeUser();
      navigate("/", {
        replace: true,
      });
    }
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <NavLink
            to="/admin/dashboard"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <MdOutlineDashboard className="icon" />
              <h3>Dashboard</h3>
            </li>
          </NavLink>
          <NavLink
            to="/admin/scholarship"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <FiBookOpen className="icon" />
              <h3>Scholarship</h3>
            </li>
          </NavLink>
          <NavLink
            to="/admin/news"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}>
            <li>
              <BsNewspaper className="icon" />
              <h3>News</h3>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="setting">
        <div className="profile-setting">
          <img src={user?.image || "https://github.com/dap23.png"} alt="" />
          <div className="profile-info">
            <span>{user?.username}</span>
            <p>{user?.role}</p>
          </div>
          <BsThreeDotsVertical className="icon-setting" />
        </div>
        <div className="sign-out">
          <button onClick={handleClick}>
            <FaSignOutAlt />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
