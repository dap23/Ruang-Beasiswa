import create from "zustand";
import user from "./slices/user";
import beasiswa from "./slices/beasiswa";
import { persist } from "zustand/middleware";
import search from "./slices/search";
import users from "./slices/users";

const useStore = create(
  persist(
    (set, get) => ({
      ...user(set, get),
      ...beasiswa(set, get),
      ...search(set, get),
      ...users(set, get),
    }),
    {
      name: "root",
      getStorage: () => sessionStorage,
    }
  )
);

export default useStore;
