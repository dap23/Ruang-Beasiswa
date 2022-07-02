import create from "zustand";
import { persist } from "zustand/middleware";

const scholarStore = create(
  persist(
    (set) => ({
      beasiswa: [],
      setBeasiswa: (data) => {
        set({ beasiswa: data });
      },
      getBeasiswaById: (id) => {
        set((state) => ({
          beasiswa: state.beasiswa.filter((data) => data.id !== id),
        }));
      },
      removeBeasiswa: (id) =>
        set((state) => ({
          beasiswa: state.beasiswa.filter((data) => data.id !== id),
        })),
    }),
    {
      name: "beasiswa-data",
      getStorage: () => sessionStorage,
    }
  )
);

export default scholarStore;
