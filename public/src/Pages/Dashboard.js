import React, { createContext, useEffect, useState } from "react";
// import Sidebar from '../Layouts/Sidebar'
import GeneralApp from "./GeneralApp";
import "./Dashboard.css";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Layouts/Sidebar";
import Main from "../Layouts/main";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../socket";
import { showSnackbar } from "../redux/slices/app";
import Sidebar2 from "../Layouts/Sidebar2";

// const isAuthenticated = false;

export const myContext = createContext();

function Dashboard() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");
  const [refresh, setRefresh] = useState(true);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Stack direction={"row"}>
        <myContext.Provider
          value={{ refresh: refresh, setRefresh: setRefresh }}
        >
          <Sidebar />
          <Sidebar2 />
          <Main />
        </myContext.Provider>
      </Stack>
    </>
  );
}

export default Dashboard;
