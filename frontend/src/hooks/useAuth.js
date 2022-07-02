import userStore from "../store/userStore";

const useAuth = () => {
  return userStore((state) => state.user);
};

export default useAuth;
