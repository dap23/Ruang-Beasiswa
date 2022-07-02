import React, { useState } from "react";
import "./scholarship.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Scholarship = () => {
  const [modal, showModal] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: null,
    jenjang: null,
    kota: null,
    description: null,
    image: null,
    kategori: null,
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
    const beasiswa = {
      name: data.name,
      jenjang: data.jenjang,
      kota: data.kota,
      description: data.description,
      image: data.image,
      kategori: data.kategori,
    };
    try {
      const res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/scholarships/upload",
        data: beasiswa,
        withCredentials: true,
      });
      if (res.status === 200) {
        setMessage(res.data.message);
        navigate("/admin/dashboard", {
          replace: true,
        });
      }
    } catch (error) {
      if (error.response.status === 401) {
        setMessage("You are not Admin");
      }
    }
  };

  return (
    <div className="scholarship">
      <Sidebar />
      <div className="content">
        {modal ? (
          <>
            <div className="navbar">
              <h1>Add Scholarship</h1>
            </div>
            <div className="body">
              {/* <div className="button">
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                  className="close-btn"
                  onClick={() => showModal(false)}>
                  &times;
                </button>
              </div> */}
              <div className="form">
                {message && message}
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="jenjang">Jenjang</label>
                  <input
                    id="jenjang"
                    type="text"
                    name="jenjang"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="kota">Kota</label>
                  <input
                    id="kota"
                    type="text"
                    name="kota"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="kategori">Kategori</label>
                  <input
                    id="kategori"
                    type="text"
                    name="kategori"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    name="description"
                    id="desc"
                    onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="image">Image</label>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    onChange={handleChange}
                  />
                </div>
                <button onClick={handleSubmit} className="add-btn">
                  Submit
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navbar">
              <h1>Scholarship List</h1>
            </div>
            <div className="body">
              <div className="button">
                <button className="add" onClick={() => showModal(true)}>
                  Add Scholarship
                </button>
              </div>
              <Table />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Scholarship;
