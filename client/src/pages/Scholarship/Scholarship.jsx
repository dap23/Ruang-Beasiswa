import React, { useState } from "react";
import styles from "./scholarship.module.scss";
import { format } from "timeago.js";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import useStore from "../../store/store";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Scholarship = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    image: "",
    jenjang: "",
    kota: "",
    link: "",
    description: "",
    kategori: "",
  });

  const beasiswas = useStore((state) => state.beasiswas);
  console.log(beasiswas);
  const removeBeasiswa = useStore((state) => state.removeBeasiswa);
  const setBeasiswa = useStore((state) => state.setBeasiswa);

  useEffect(() => {
    setBeasiswa();
  }, [setBeasiswa]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const beasiswa = {
      name: data?.name,
      image: data?.image,
      jenjang: data?.jenjang,
      kota: data?.kota,
      link: data?.link,
      description: data?.description,
      kategori: data?.kategori,
    };
    try {
      const res = await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/scholarships/upload",
        data: beasiswa,
        withCredentials: true,
      });
      if (res.status === 200) {
        navigate("/dashboard/scholarship");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3>{modal ? "Add Beasiswa" : "Beasiswa"}</h3>
        {modal ? (
          <button onClick={() => setModal(false)}>Cancel</button>
        ) : (
          <button onClick={() => setModal(true)}>Add Beasiswa</button>
        )}
      </div>
      {modal ? (
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name..."
              id="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              placeholder="Image..."
              id="Image"
              name="image"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Jenjang">Jenjang</label>
            <input
              type="text"
              placeholder="Jenjang..."
              id="Jenjang"
              name="jenjang"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Domisili">Domisili</label>
            <input
              type="text"
              placeholder="Domisili..."
              id="Domisili"
              name="kota"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Kategori">Kategori</label>
            <input
              type="text"
              placeholder="Kategori..."
              id="Kategori"
              name="kategori"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Link">Link Pendaftaran</label>
            <input
              type="text"
              placeholder="Link Pendaftaran..."
              id="Link"
              name="link"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Desc">Description</label>
            <textarea
              name="description"
              id="desc"
              placeholder="Description..."
              onChange={handleChange}></textarea>
          </div>
          <div className={styles.inputGroup}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Added At</th>
                <th>Domisili</th>
                <th>Jenjang</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {beasiswas
                ? beasiswas?.map((beasiswa) => (
                    <tr key={beasiswa?.id}>
                      <td>{beasiswa?.id}</td>
                      <td>
                        <img src={beasiswa?.image} alt="" />
                      </td>
                      <td>{beasiswa?.name}</td>
                      <td>{format(beasiswa?.created_at, "id-ID")}</td>
                      <td>{beasiswa?.kota}</td>
                      <td>{beasiswa?.jenjang}</td>
                      <td>
                        <div className={styles.button}>
                          <AiFillEdit className={styles.edit} />
                          <AiFillDelete
                            className={styles.delete}
                            onClick={() => removeBeasiswa(beasiswa?.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Scholarship;
