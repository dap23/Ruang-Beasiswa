import Index from "./pages/Index/Index";
import Single from "./pages/Single/Single";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Layout from "./Layout/User/Layout";
import Scholarships from "./pages/Scholarships/Scholarships";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import useStore from "./store/store";
import Category from "./pages/Category/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import Scholarship from "./pages/Scholarship/Scholarship";
import User from "./pages/User/User";
import LayoutAdmin from "./Layout/Admin/LayoutAdmin";
import { useEffect } from "react";

function App() {
  const currentUser = useStore((state) => state.currentUser);
  const setBeasiswa = useStore((state) => state.setBeasiswa);

  useEffect(() => {
    setBeasiswa();
  }, [setBeasiswa]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="scholarship" element={<Scholarships />} />
        <Route path="scholarship/:id" element={<Single />} />
        <Route path="scholarship/cat/:cat" element={<Category />} />
        <Route path="profile/:userId" element={<Profile />} />
      </Route>

      <Route
        path="/auth"
        element={currentUser?.data ? <Navigate to="/" /> : <Outlet />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          currentUser?.data?.role === "user" || !currentUser?.data ? (
            <Navigate to="/" />
          ) : (
            <LayoutAdmin />
          )
        }>
        <Route index element={<Dashboard />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
