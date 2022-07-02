import create from "zustand";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { persist } from "zustand/middleware";

const cookie = new Cookies();
const userStore = create(
  persist(
    (set) => ({
      user: {},
      setUser: () => {
        const token = cookie.get("token");
        if (token) {
          const data = jwtDecode(token);
          set({ user: data });
        } else {
          set({ user: {} });
        }
      },
      removeUser: () => set({ user: {} }),
    }),
    {
      name: "user-data",
      getStorage: () => sessionStorage,
    }
  )
);

export default userStore;
