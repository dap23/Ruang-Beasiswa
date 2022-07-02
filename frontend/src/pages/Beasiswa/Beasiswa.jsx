import React from "react";
import "./beasiswa.css";
import Navbar from "../../components/Navbar/Navbar";
import scholarStore from "../../store/scholarStore";
import Moment from "moment";
import { Link, useParams } from "react-router-dom";

const Beasiswa = () => {
  const beasiswa = scholarStore((state) => state.beasiswa);

  const { kota } = useParams();

  return (
    <div className="wrapper-beasiswa">
      <Navbar />
      <div className="wrapper-bea">
        <h1>
          Beasiswa <b style={{ textTransform: "capitalize" }}>{kota}</b>
        </h1>
        {beasiswa?.map((data, index) => {
          Moment.locale("id");
          const date = data.created_at;
          const format = Moment(date).format("DD-MM-YYYY");
          const isTrue = data.kategori
            .toLowerCase()
            .includes(kota.toLowerCase());

          return (
            <>
              {isTrue ? (
                <div className="konten-bea" key={index}>
                  <img src={data.image} alt="" />
                  <div className="desc-bea">
                    <div className="judul-bea">
                      <h3>{data.name}</h3>
                      <p>{format}</p>
                    </div>
                    <p className="desc">{data.description}</p>
                    <Link to={`/scholarship/single/${data.id}`}>
                      <button>Daftar</button>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Beasiswa;

// export const Daerah = () => {};
// export const Provinsi = () => {};
// export const Nasional = () => {};
