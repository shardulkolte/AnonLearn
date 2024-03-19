import React, { useEffect } from "react";
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

// const isAuthenticated = false;

function Dashboard() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     window.onload = function () {
  //       if (!window.location.hash) {
  //         window.location = window.location + "#loaded";
  //         window.location.reload();
  //       }
  //     };

  //     window.reload();
  //     if (!socket) {
  //       connectSocket(user_id);
  //     }

  //     socket.on("new_friend_request", (data) => {
  //       dispatch(
  //         showSnackbar({
  //           severity: "success",
  //           message: "New friend request received",
  //         })
  //       );
  //     });

  //     socket.on("request_accepted", (data) => {
  //       dispatch(
  //         showSnackbar({
  //           severity: "success",
  //           message: "Friend Request Accepted",
  //         })
  //       );
  //     });

  //     socket.on("request_sent", (data) => {
  //       dispatch(showSnackbar({ severity: "success", message: data.message }));
  //     });
  //   }
  //   return () => {
  //     socket?.off("new_friend_request");
  //     socket?.off("request_accepted");
  //     socket?.off("request_sent");
  //     socket?.off("start_chat");
  //     socket?.off("new_message");
  //     socket?.off("audio_call_notification");
  //   };
  // }, [isLoggedIn, socket]);

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
