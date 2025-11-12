import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/HeroSection/Home";
import Register from "./pages/HeroSection/Register";
import Login from "./pages/HeroSection/Login";
import UserProfile from "./pages/User/UserProfile";
import UserHome from "./pages/User/UserHome";
import UserPost from "./pages/User/UserPost";
import Setting from "./pages/HeroSection/Setting";
import ViewDetails from "./pages/User/ViewDetails";
import NProgress from "nprogress";
import AdminLogin from "./pages/Admin/adminLogin";
import "nprogress/nprogress.css";


const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Start progress bar when route changes
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/userpost" element={<UserPost />} />
        <Route path="/viewdetails" element={<ViewDetails />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default App;
