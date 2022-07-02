import React from "react";
import "./content.css";
import { FiFilter } from "react-icons/fi";
import Table from "../../components/Table/Table";
import userStore from "../../store/userStore";

const Content = () => {
  const user = userStore((state) => state.user);
  return (
    <div className="content">
      <div className="top">
        <div className="dashboard-header">
          <h1>Hello, {user?.username || "Not Found"}</h1>
          <p>Let’s see what scholarship you have been added today!</p>
        </div>
        <div className="search-and-button">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            name="Search"
          />
          <button className="button-filter" type="filter" aria-label="Filter">
            <FiFilter />
            Filter
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Content;
