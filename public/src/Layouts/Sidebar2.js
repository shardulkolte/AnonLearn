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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// const isAuthenticated = false;

function Sidebar2() {
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

      {/* <Sidebar /> */}
      {/* Left */}
      <Box
        sx={{
          overflowY: "scroll",

          height: "100vh",
          width: 320,
          backgroundColor: "#202020",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h5" color={"white"}>
              Groups
            </Typography>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            <Typography variant="subtitle2" sx={{}} component={Link}>
              Join a new group
            </Typography>
            <IconButton
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              <Plus color="white" />
            </IconButton>
          </Stack>
          <Divider
            sx={{
              borderTopWidth: 1, // Set the thickness of the line
              borderTopStyle: "solid", // Use a solid line
              borderTopColor: "white", // Set the color of the line
              fontWeight: "bold", // Make the divider bold
              margin: "20px 0", // Add some margin for spacing
            }}
          />
          {/* overflowY: "scroll" */}
          <Stack sx={{ flexGrow: 1, height: "100%" }}>
            <Stack spacing={2.4}>
              {conversations.map((conv) => {
                return <ChatElement props={conv} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Sidebar2;
