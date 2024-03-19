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
import Conversation from "./Conversation";
import NoChatSVG from "../assets/Illustration/NoChat";
import { useSelector } from "react-redux";
import Contact from "../Layouts/Contact";
import SharedMessages from "../Layouts/SharedMessages";
import StarredMessages from "../Layouts/StarredMessages";

// const isAuthenticated = false;

function Group() {
  const [openDialog, setOpenDialog] = useState(false);

  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // if(!isAuthenticated){
  //     return <Navigate to="/login" />;
  //   }

  return (
    <>
      {/* {chats} */}
      <Stack direction={"row"} sx={{ width: "100%" }}>
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
            <Stack sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => el.pinned).map((el, idx) => {
                  return <ChatElement {...el} />;
                })}
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Groups
                </Typography>
                {/* Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
        {/* //TODO =>implement conversation component */}

        <Box
          sx={{
            height: "100vh",
            width: sideBar.open ? "calc(100vw - 750px)" : "calc(100vw - 400px)",
            backgroundColor: "#949494",
          }}
        >
          {/* Conversation */}
          {room_id !== 0 && chat_type === "individual" ? (
            <Conversation />
          ) : (
            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <NoChatSVG />
              <Typography
                variant="subtitle2"
                sx={{ color: "black", fontSize: "1.3rem" }}
              >
                Select a conversation or start a new one
              </Typography>
            </Stack>
          )}
        </Box>
        {/* Contact */}
        {sideBar.open &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages />;

              case "SHARED":
                return <SharedMessages />;

              default:
                break;
            }
          })()}
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Group;
