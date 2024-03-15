import React from "react";
// import Sidebar from '../Layouts/Sidebar'
import GeneralApp from "./GeneralApp";
import "./Dashboard.css";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Layouts/Sidebar";
import Main from "../Layouts/main";
import { useSelector } from "react-redux";

// const isAuthenticated = false;

function Dashboard() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Stack direction={"row"}>
        <Sidebar />
        <Main />
      </Stack>
    </>
  );
}

export default Dashboard;
