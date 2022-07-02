import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./single.css";
import scholarStore from "../../store/scholarStore";
import Navbar from "../../components/Navbar/Navbar";
import BeasiswaImage from "../../assets/beasiswa-PPG.jpeg";
import { GoLocation } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
import axios from "axios";

const Single = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const res = await axios.get(`/scholarships/id/${id}`);
        setData(res.data.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchSingle();
  }, [id]);

  return (
    <div className="single">
      <Navbar />
      <div className="content">
        {error ? error.message : ""}
        <div className="image">
          <img src={data?.image ? data?.image : BeasiswaImage} alt="" />
        </div>
        <div className="text">
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
        </div>
        <div className="bottom">
          <div className="location">
            <GoLocation className="icon" />
            <p>
              <b>{data?.kota}</b>
            </p>
          </div>
          <div className="jenjang">
            <IoSchoolOutline className="icon" />
            <p>
              <b>{data?.jenjang}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
