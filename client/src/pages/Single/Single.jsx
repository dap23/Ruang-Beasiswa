import React from "react";
import styles from "./single.module.scss";
import { GoLocation, GoLink } from "react-icons/go";
import { MdSchool } from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import * as timeago from "timeago.js";

const Single = () => {
  const { id } = useParams();
  const { data } = useFetch(`/scholarships/id/${id}`);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={data?.data?.image} alt="" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>
          <h3>{data?.data?.name}</h3>
          <p>{timeago.format(data?.data?.created_at - 11 * 1000 * 60 * 60)}</p>
        </div>
        <div className={styles.content}>
          <p>{data?.data?.description}</p>
        </div>
        <div className={styles.info}>
          <h3>
            <GoLocation /> {data?.data?.kota}
          </h3>
          <h3>
            <MdSchool /> {data?.data?.jenjang}
          </h3>
          <h3>
            <GoLink />{" "}
            <a href={data?.data?.link} target="_blank" rel="noreferrer">
              Daftar
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Single;
