import "./list-beasiswa.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import scholarStore from "../../store/scholarStore";

const ListBeasiswa = () => {
  const beasiswa = scholarStore((state) => state.beasiswa);

  return (
    <div className="list-beasiswa">
      <Swiper
        slidesPerView={beasiswa?.length < 4 ? beasiswa?.length : 4}
        spaceBetween={50}>
        {beasiswa?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="beasiswa">
              <div className="image">
                <img src={data?.image} alt={data?.name} />
              </div>
              <div className="text">
                <a href={`/scholarship/single/${data?.id}`}>Read More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ListBeasiswa;
