import React, { useState } from "react";
import Sidebar from "./Sidebar";

import {
  Avatar,
  Box,
  Divider,
  FormGroup,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  MagnifyingGlass,
  Note,
  PencilCircle,
  Plus,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../components/Search";
import { ChatList } from "../Data/Icons";
import ChatElement from "../components/ChatElement";
import CreateGroup from "../components/Group/CreateGroup";
import { Navigate } from "react-router-dom";
import ChatArea from "./ChatArea";
import NoChatSVG from "../assets/Illustration/NoChat";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import SharedMessages from "./SharedMessages";
import StarredMessages from "./StarredMessages";
import User_groups from "./Users_group";

// const isAuthenticated = false;

function Conversation() {
  const [openDialog, setOpenDialog] = useState(false);

  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const [chatconversations, setchatConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
  ]);
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);

  return (
    <>
      {/* {chats} */}
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* <Sidebar /> */}
        {/* Left */}

        <Box
          sx={{
            height: "100vh",
            width: sideBar.close
              ? "calc(100vw - 750px)"
              : "calc(100vw - 400px)",
            backgroundColor: "#949494",
          }}
        >
          {/* Conversation */}
          {chatconversations.map((conv) => {
            return <ChatArea props={conv} />;
          })}
          {/* <User_groups /> */}
        </Box>
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Conversation;
