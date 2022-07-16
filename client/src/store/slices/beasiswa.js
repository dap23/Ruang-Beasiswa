import axios from "axios";

const beasiswa = (set, get) => ({
  beasiswas: [],
  setBeasiswa: async () => {
    const res = await axios.get("/scholarships");
    set({ beasiswas: res.data });
  },
  removeBeasiswa: async (id) => {
    await axios.delete(`/scholarships/${id}`);
    set((state) => ({
      beasiswas: state.beasiswas.filter((bea) => bea.id !== id),
    }));
  },
});

export default beasiswa;
