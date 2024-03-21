import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, Navigate, Outlet, useSearchParams } from "react-router-dom";
import Chats from "../Layouts/Chats";
import Conversation from "../Layouts/Conversation";
import Sidebar from "../Layouts/Sidebar";
import { useSelector } from "react-redux";
import Contact from "../Layouts/Contact";
import SharedMessages from "../Layouts/SharedMessages";
import StarredMessages from "../Layouts/StarredMessages";
import Main from "../Layouts/main";

import NoChatSVG from "../assets/Illustration/NoChat";
import Group from "../Layouts/Group";

const GeneralApp = () => {
  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);

  const theme = useTheme();
  const [searchParams] = useSearchParams();

  return (
    <>
      {/* {chats} */}
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* <Sidebar /> */}
        <Chats />
        {/* <Box sx={{
          height:"100vh",
          width: "calc(100vw-80px)"
        }}>
          <Chats />
          
        </Box> */}
      </Stack>
    </>
  );
};

export default GeneralApp;
