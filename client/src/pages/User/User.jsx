import React from "react";
import useStore from "../../store/store";
import styles from "./user.module.scss";
import { format } from "timeago.js";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const User = () => {
  const users = useStore((state) => state.users);
  const deleteUser = useStore((state) => state.deleteUser);
  return (
    <div className={styles.container}>
      <h3>Users</h3>
      <div className={styles.content}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Join</th>
              <th>Domisili</th>
              <th>Jenjang</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => {
                if (user.role === "user") {
                  return user;
                }
                return null;
              })
              .map((user) => (
                <tr key={user?.id}>
                  <td>{user?.id}</td>
                  <td>
                    <img src={user?.image} alt="" />
                  </td>
                  <td>{user?.username}</td>
                  <td>{format(user?.created_at, "id-ID")}</td>
                  <td>{user?.kota}</td>
                  <td>{user?.jenjang}</td>
                  <td>
                    <div className={styles.button}>
                      <AiFillEdit className={styles.edit} />
                      <AiFillDelete
                        className={styles.delete}
                        onClick={() => deleteUser(user?.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
