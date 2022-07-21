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
  editBeasiswa: async (id, newBeasiswa) => {
    await axios.put(`scholarships/${id}`);
    set((state) => ({
      beasiswas: state.beasiswas.map((beasiswa) => {
        if (beasiswa.id === newBeasiswa.id) {
          return {
            ...beasiswa,
            name: newBeasiswa.name,
            image: newBeasiswa.image,
            jenjang: newBeasiswa.jenjang,
            kota: newBeasiswa.kota,
            link: newBeasiswa.link,
            description: newBeasiswa.description,
            kategori: newBeasiswa.kategori,
          };
        } else {
          return beasiswa;
        }
      }),
    }));
  },
});

export default beasiswa;
