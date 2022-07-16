import React from "react";
import styles from "./news.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const News = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://berita-indo-api.vercel.app/v1/cnbc-news"
      );
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>News</h3>
      <div className={styles.wrapper}>
        <Swiper spaceBetween={50} slidesPerView={4}>
          {data?.map((berita, id) => (
            <SwiperSlide key={id}>
              <a
                href={berita?.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}>
                <div className={styles.box}>
                  <img src={berita?.image?.large} alt="" />
                  <span>{berita?.title}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
