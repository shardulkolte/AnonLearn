import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Aboutus from "./Pages/Aboutus";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Layouts/Settings";
import Group from "./Layouts/Group";
import Profile from "./Layouts/Profile";
import GeneralApp from "./Pages/GeneralApp";
import MainLayout from "./Layouts/MainLayout";
import ResetPassword from "./Pages/ResetPassword";
import NewPassword from "./Pages/NewPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<MainLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/auth/new-password" element={<NewPassword />} />
        </Route>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<GeneralApp />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/group" element={<Group />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
