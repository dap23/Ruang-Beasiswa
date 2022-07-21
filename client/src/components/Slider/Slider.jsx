import React from "react";
import styles from "./slider.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useStore from "../../store/store";

const Slider = () => {
  const beasiswas = useStore((state) => state.beasiswas);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>List Beasiswa</h3>
        <Link to="scholarship" style={{ textDecoration: "none" }}>
          <p>View All</p>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <Swiper spaceBetween={50} slidesPerView={4}>
          {beasiswas?.map((data, i) => (
            <SwiperSlide key={i}>
              <Link to={`/scholarship/${data?.id}`} className={styles.link}>
                <div className={styles.box}>
                  <img src={data?.image} alt="" />
                  <span>{data?.name}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
