import React, { useState } from "react";
import styles from "./scholarship.module.scss";
import { format } from "timeago.js";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import useStore from "../../store/store";
import { useEffect } from "react";
import axios from "axios";

const Scholarship = () => {
  const [modal, setModal] = useState({
    show: false,
    type: null,
    id: null,
  });
  const [msg, setMsg] = useState(null);
  const [showDel, setShowDel] = useState(false);
  const [data, setData] = useState({
    name: "",
    image: "",
    jenjang: "",
    kota: "",
    link: "",
    description: "",
    kategori: "",
  });
  const [editData, setEditData] = useState([]);
  console.log(editData);

  const beasiswas = useStore((state) => state.beasiswas);
  console.log(beasiswas);
  const removeBeasiswa = useStore((state) => state.removeBeasiswa);
  const editBeasiswa = useStore((state) => state.editBeasiswa);
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

  const handleDelete = (id) => {
    removeBeasiswa(id);
    setShowDel(true);
  };

  useEffect(() => {
    if (showDel) {
      setTimeout(function () {
        setShowDel(false);
      }, 3000);
    }
  }, [showDel]);

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
      await axios({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/scholarships/upload",
        data: beasiswa,
        withCredentials: true,
      });
      setMsg("Scholarship success uploaded!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAction = async (id, type) => {
    switch (type) {
      case "ADD":
        setModal({
          show: true,
          type: "ADD",
        });
        break;
      case "EDIT":
        setModal({
          show: true,
          type: "EDIT",
          id: id,
        });
        const res = await axios.get(`/scholarships/id/${id}`);
        setEditData(res.data.data);
        break;
      default:
        break;
    }
  };

  const handleChangeEdit = (e) => {
    const value = e.target.value;
    setEditData({ ...editData, [e.target.name]: value });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const beasiswa = {
      name: editData?.name,
      image: editData?.image,
      jenjang: editData?.jenjang,
      kota: editData?.kota,
      link: editData?.link,
      description: editData?.description,
      kategori: editData?.kategori,
    };
    try {
      await axios({
        method: "PUT",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: `/scholarships/${modal.id}`,
        data: beasiswa,
        withCredentials: true,
      });
      setMsg("Scholarship success edited!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {msg ? (
        <div className={styles.msg}>
          <h3>{msg}</h3>
        </div>
      ) : (
        ""
      )}
      {showDel ? (
        <div className={styles.msg}>
          <h3>Scholarship has been deleted!</h3>
        </div>
      ) : (
        ""
      )}
      <div className={styles.top}>
        <h3>
          {modal.type === "ADD"
            ? "Add Beasiswa"
            : modal.type === "EDIT"
            ? "Edit Beasiswa"
            : "Beasiswa"}
        </h3>
        {modal.type === "ADD" || modal.type === "EDIT" ? (
          <button
            onClick={() =>
              setModal({
                show: false,
                type: null,
              })
            }>
            Cancel
          </button>
        ) : (
          <button
            onClick={() =>
              setModal({
                show: true,
                type: "ADD",
              })
            }>
            Add Beasiswa
          </button>
        )}
      </div>
      {modal.show && modal.type === "ADD" ? (
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
      ) : modal.show && modal.type === "EDIT" ? (
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name..."
              id="Name"
              name="name"
              onChange={handleChangeEdit}
              value={editData?.name}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              placeholder="Image..."
              id="Image"
              name="image"
              onChange={handleChangeEdit}
              value={editData?.image}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Jenjang">Jenjang</label>
            <input
              type="text"
              placeholder="Jenjang..."
              id="Jenjang"
              name="jenjang"
              onChange={handleChangeEdit}
              value={editData?.jenjang}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Domisili">Domisili</label>
            <input
              type="text"
              placeholder="Domisili..."
              id="Domisili"
              name="kota"
              onChange={handleChangeEdit}
              value={editData?.kota}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Kategori">Kategori</label>
            <input
              type="text"
              placeholder="Kategori..."
              id="Kategori"
              name="kategori"
              onChange={handleChangeEdit}
              value={editData?.kategori}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Link">Link Pendaftaran</label>
            <input
              type="text"
              placeholder="Link Pendaftaran..."
              id="Link"
              name="link"
              onChange={handleChangeEdit}
              value={editData?.link}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="Desc">Description</label>
            <textarea
              name="description"
              id="desc"
              placeholder="Description..."
              onChange={handleChangeEdit}
              value={editData?.description}></textarea>
          </div>
          <div className={styles.inputGroup}>
            <button onClick={handleSubmitEdit}>Edit</button>
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
                          <AiFillEdit
                            className={styles.edit}
                            onClick={() => handleAction(beasiswa?.id, "EDIT")}
                          />
                          <AiFillDelete
                            className={styles.delete}
                            onClick={() => handleDelete(beasiswa?.id)}
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
