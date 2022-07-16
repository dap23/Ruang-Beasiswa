import React from "react";
import styles from "./hero.module.scss";
import Image from "../../assets/hero.png";
import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { useState } from "react";
import useStore from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const setQuery = useStore((state) => state.setQuery);

  useEffect(() => {
    setQuery(search);
  }, [search]);

  const handleSearch = () => {
    navigate("/scholarship");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={Image} alt="" />
      </div>
      <div className={styles.right}>
        <h1>Ruang Beasiswa</h1>
        <span>Temukan 1001 Beasiswa dalam satu ruang pintar </span>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>
            <BiSearchAlt2 />
          </button>
        </div>
        <p>
          <BiUser />
          <b>1.000</b> user dengan keberhasilan <b>90%</b>
        </p>
      </div>
    </div>
  );
};

export default Hero;
