import React from "react";
import "./news.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import URL from "./config";
import useFetch from "../../hooks/useFetch";

const News = () => {
  const { data, loading, error } = useFetch(URL);

  return (
    <div className="news">
      <Swiper slidesPerView={4} spaceBetween={50}>
        {loading && "Loading"}
        {error && error}
        {data?.data?.memes?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="new">
              <div className="image">
                <img src={item.url} alt={item.title} />
              </div>
              <div className="text">
                <h2>{item.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
