import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

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
import { useDispatch, useSelector } from "react-redux";
import { myContext } from "../Pages/Dashboard";
import axios from "axios";

// const isAuthenticated = false;
const truncateText = (string, n) => {
  return string?.length > n ? `${string?.slice(0, n)}...` : string;
};

function Sidebar2() {
  const [openDialog, setOpenDialog] = useState(false);
  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);
  const navigate = useNavigate();
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  // const [conversations, setConversations] = useState([
  //   {
  //     name: "Test#1",
  //     lastMessage: "Last Message #1",
  //     timeStamp: "today",
  //   },
  //   {
  //     name: "Test#2",
  //     lastMessage: "Last Message #2",
  //     timeStamp: "today",
  //   },
  //   {
  //     name: "Test#3",
  //     lastMessage: "Last Message #3",
  //     timeStamp: "today",
  //   },
  // ]);

  const dispatch = useDispatch();
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext);
  console.log("Context API : refresh : ", refresh);
  const [conversations, setConversations] = useState([]);
  // console.log("Conversations of Sidebar : ", conversations);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    // console.log("Sidebar : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:3001/chat/", config).then((response) => {
      console.log("Data refresh in sidebar ", response.data);
      setConversations(response.data);
      setRefresh(!refresh);
    });
  }, [refresh]);

  return (
    <>
      {/* {chats} */}

      {/* <Sidebar /> */}
      {/* Left */}
      <Box
        sx={{
          overflowY: "scroll",

          height: "100vh",
          width: 340,
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
            {/* <Typography variant="h5" color={"white"}>
              Groups
            </Typography> */}
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
                navigate("/dashboard/creategroup");
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
              {conversations.map((conversation, index) => {
                var message =
                  "No Privious Message, Please start new Conversation";
                var chatName = "";
                if (conversation.isGroupChat) {
                  chatName = conversation.chatName;
                } else {
                  conversation.users.map((user) => {
                    if (user._id != userData.data._id) {
                      chatName = user.username;
                    }
                  });
                }
                if (conversation.latestMessage === undefined) {
                  return (
                    <motion.div
                      whileHover={{ scale: 1.01 }} // Scale effect on hover
                      whileTap={{ scale: 0.97 }} // Scale effect on click
                      key={index}
                      onClick={() => {
                        navigate(
                          "/dashboard/chat/" + conversation._id + "&" + chatName
                        );
                      }}
                    >
                      <Box
                        sx={{
                          width: "95%",
                          height: 60,
                          borderRadius: 1,
                          backgroundColor: "#404040",
                          transition: "background-color 0.3s",
                          "&:hover": {
                            backgroundColor: "#555555",
                            cursor: "pointer", // Add pointer cursor on hover
                          },
                        }}
                        p={1.2}
                      >
                        <Stack
                          direction="row"
                          alignItems={"center"}
                          justifyContent="space-between"
                        >
                          <Stack direction="row" spacing={2}>
                            <Avatar>{chatName[0]}</Avatar>
                            <Stack spacing={0.3}>
                              <Typography color={"white"} variant="subtitle2">
                                {chatName}
                              </Typography>
                              <Typography variant="subtitle2">
                                {truncateText(message, 20)}
                              </Typography>
                            </Stack>
                          </Stack>
                          {/* <Stack spacing={1} alignItems={"center"}>
                            <Typography sx={{ fontWeight: 600 }} variant="caption">
                              {props.timeStamp}
                            </Typography>
                            <Badge
                              className="unread-count"
                              color="primary"
                              badgeContent={unread}
                            />
                          </Stack> */}
                        </Stack>
                      </Box>
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div
                      whileHover={{ scale: 1.01 }} // Scale effect on hover
                      whileTap={{ scale: 0.97 }} // Scale effect on click
                      key={index}
                      onClick={() => {
                        navigate(
                          "/dashboard/chat/" + conversation._id + "&" + chatName
                        );
                      }}
                    >
                      <Box
                        sx={{
                          width: "95%",
                          height: 60,
                          borderRadius: 1,
                          backgroundColor: "#404040",
                          transition: "background-color 0.3s",
                          "&:hover": {
                            backgroundColor: "#555555",
                            cursor: "pointer", // Add pointer cursor on hover
                          },
                        }}
                        p={1.2}
                      >
                        <Stack
                          direction="row"
                          alignItems={"center"}
                          justifyContent="space-between"
                        >
                          <Stack direction="row" spacing={2}>
                            <Avatar>{chatName[0]}</Avatar>

                            <Stack spacing={0.3}>
                              <Typography color={"white"} variant="subtitle2">
                                {chatName}
                              </Typography>
                              <Typography variant="subtitle2" color={"white"}>
                                {truncateText(
                                  conversation.latestMessage.content,
                                  20
                                )}
                              </Typography>
                            </Stack>
                          </Stack>
                          {/* <Stack spacing={1} alignItems={"center"}>
                            <Typography sx={{ fontWeight: 600 }} variant="caption">
                              {props.timeStamp}
                            </Typography>
                            <Badge
                              className="unread-count"
                              color="primary"
                              badgeContent={unread}
                            />
                          </Stack> */}
                        </Stack>
                      </Box>
                    </motion.div>
                  );
                }
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
