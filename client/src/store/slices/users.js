import axios from "axios";

const users = (set, get) => ({
  users: [],
  addUser: async () => {
    const res = await axios.get("/user");
    set({ users: res.data });
  },
  deleteUser: async (id) => {
    const res = await axios.delete(`/user/${id}`);
    set({ users: res.data });
  },
});

export default users;
