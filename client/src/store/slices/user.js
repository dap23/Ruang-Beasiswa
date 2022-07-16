const user = (set, get) => ({
  currentUser: {},
  login: (state) => set({ currentUser: state }),
  logout: () => set({ currentUser: {} }),
});

export default user;
