import React from "react";
import { useEffect } from "react";
import useStore from "../../store/store";
import styles from "./users.module.scss";
import { format } from "timeago.js";

const Users = () => {
  const users = useStore((state) => state.users);
  const addUser = useStore((state) => state.addUser);
  useEffect(() => {
    addUser();
  }, []);

  return (
    <div className={styles.container}>
      <h3>New User</h3>
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
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?.id}>
                <td>{user?.id}</td>
                <td>
                  <img src={user?.image} alt="" />
                </td>
                <td>{user?.username}</td>
                <td>{format(user?.created_at, "id-ID")}</td>
                <td>{user?.kota}</td>
                <td>{user?.jenjang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
