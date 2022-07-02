// import React, { useState } from "react";
import LogoLeft from "../../assets/logo-landing-left.png";
import LogoRight from "../../assets/logo-landing-right.png";
import LogoLPDP from "../../assets/logo-lpdp.png";
import LogoDjarum from "../../assets/logo-djarum-beasiswa.png";
import LogoRG from "../../assets/logo-ruang-guru.png";
import "./landingPage.css";
import TopCategory from "../../components/List/Top-Category";
import Footer from "../../components/Footer/Footer";
import ListBeasiswa from "../../components/List/List-Beasiswa";
import News from "../../components/News/News";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import useFetch from "../../hooks/useFetch";
import scholarStore from "../../store/scholarStore";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const setBeasiswa = scholarStore((state) => state.setBeasiswa);
  const { data } = useFetch("/scholarships");

  useEffect(() => {
    setBeasiswa(data);
  }, [data]);

  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <div className="list-konten">
        <div>
          <h1>List Beasiswa</h1>
          <ListBeasiswa />
        </div>
        <div>
          <h1>Top News</h1>
          <News />
        </div>
        <div className="kategori-beasiswa">
          <h1>Top Category</h1>
          <TopCategory />
        </div>
      </div>
      <div className="powered">
        <h4>Powered by</h4>
        <div id="logo-powered">
          <img src={LogoLPDP} alt="" className="img-logo-lpdp" />
          <img src={LogoDjarum} alt="" className="img-logo-djarum" />
          <img src={LogoRG} alt="" className="img-logo-rg" />
        </div>
      </div>
      <div className="logo-bawah">
        <img src={LogoLeft} alt="" className="img-left" />
        <img src={LogoRight} alt="" className="img-right" />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
