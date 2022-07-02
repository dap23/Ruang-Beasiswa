import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.css";
import Content from "../../components/Content/Content";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
