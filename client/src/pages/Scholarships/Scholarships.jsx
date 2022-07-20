import React from "react";
import styles from "./scholarships.module.scss";
import { GoLocation } from "react-icons/go";
import { MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import useStore from "../../store/store";

const Scholarships = () => {
  const beasiswas = useStore((state) => state.beasiswas);
  const query = useStore((state) => state.query);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Scholarships</h1>
      </div>
      <div className={styles.content}>
        {beasiswas ? (
          beasiswas
            .filter((d) => {
              if (d === "") {
                return d;
              } else if (d.name.toLowerCase().includes(query.toLowerCase())) {
                return d;
              }
              return null;
            })
            .map((beasiswa, i) => (
              <div className={styles.box} key={i}>
                <img src={beasiswa?.image} alt={beasiswa?.name} />
                <div className={styles.info}>
                  <h1>{beasiswa?.name}</h1>
                  <p>{beasiswa?.description}</p>
                  <div className={styles.wrapper}>
                    <h3>
                      <GoLocation /> {beasiswa?.kota}
                    </h3>
                    <h3>
                      <MdSchool /> {beasiswa?.jenjang}
                    </h3>
                  </div>
                  <div className={styles.button}>
                    <Link
                      to={`/scholarship/${beasiswa?.id}`}
                      style={{ color: "inherit", textDecoration: "none" }}>
                      <button>Daftar</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className={styles.box}>
            <h3>Beasiswa Kosong :(</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scholarships;
