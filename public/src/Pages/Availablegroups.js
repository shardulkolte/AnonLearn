import React, { useContext, useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormGroup,
  IconButton,
  Link,
  Stack,
  TextField,
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
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import NoChatSVG from "../assets/Illustration/NoChat";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Layouts/Contact";
import SharedMessages from "../Layouts/SharedMessages";
import StarredMessages from "../Layouts/StarredMessages";
import Group_list from "../Layouts/Group_list";
import { myContext } from "./Dashboard";
import axios from "axios";
import lo from "./logo.png";
import { styled } from "@mui/material/styles";
import Picker from "@emoji-mart/react";
import { refreshSidebarFun } from "../redux/slices/refreshSidebar";
import { showSnackbar } from "../redux/slices/app";

// const isAuthenticated = false;

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = React.useState(false);
  return (
    <StyledInput
      fullWidth
      placeholder="Search"
      variant="filled"
      sx={{
        backgroundColor: "#ECECEC",
        borderRadius: 2,
        outlineWidth: 0,
        outlineColor: "black",
      }}
    ></StyledInput>
  );
};

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

function Availablegroups() {
  const [openPicker, setOpenPicker] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);
  const { refresh, setRefresh } = useContext(myContext);
  // const [message, setMessage] = useState("");
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [groups, SetGroups] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get("http://localhost:3001/chat/fetchGroup", config)
      .then((response) => {
        console.log("Group Data from API ", response.data);
        SetGroups(response.data);
      });
  }, [refresh]);

  return (
    <>
      {/* {chats} */}
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* <Sidebar /> */}
        {/* Left */}
        {/*  */}

        <Box
          sx={{
            height: "100vh",
            width: sideBar.close
              ? "calc(100vw - 750px)"
              : "calc(100vw - 400px)",
            backgroundColor: "#949494",
          }}
        >
          <Stack
            height={"100%"}
            maxHeight={"100vh"}
            width={"auto"}
            p={1}
            spacing={4}
          >
            {/* Chat Header */}
            <Stack spacing={1}>
              <Box
                padding={1}
                borderRight={1}
                borderBottom={1}
                borderRadius={2}
                borderColor="#000"
                sx={{
                  width: "100%",
                  backgroundColor: "#202020",
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Stack
                  alignItems={"center"}
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <Stack
                    // onClick={() => {
                    //   dispatch(ToggleSidebar());
                    // }}
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                  >
                    <Box>
                      <img src={lo} width={50} height={50}></img>
                    </Box>
                    <Stack spacing={0.2}>
                      <Typography variant="h5" color={"white"}>
                        Available Groups
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
              {/* search bar */}
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Stack sx={{ width: "100%" }}>
                  {/* ChatInput */}
                  <Box
                    sx={{
                      display: openPicker ? "inline" : "none",
                      zIndex: 10,
                      position: "fixed",
                      bottom: 81,
                      right: 100,
                    }}
                  ></Box>
                  <ChatInput />
                </Stack>
              </Stack>
            </Stack>

            {/* List*/}
            <Stack
              spacing={3}
              sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
            >
              <Box width={"100%"} spacing={1}>
                <Stack spacing={2.4}>
                  {groups.map((group, index) => {
                    return (
                      <motion.div
                        whileHover={{ scale: 1.01 }} // Scale effect on hover
                        whileTap={{ scale: 0.97 }} // Scale effect on click
                        key={index}
                        onClick={() => {
                          console.log(
                            "Creating chat with group ",
                            group.username
                          );
                          const config = {
                            headers: {
                              Authorization: `Bearer ${userData.data.token}`,
                            },
                          };
                          axios
                            .put(
                              "http://localhost:3001/chat/addSelfToGroup",
                              {
                                chatId: group._id,
                                userId: userData.data._id,
                              },
                              config
                            )
                            .then(function (response) {
                              console.log(response);

                              // setMessage(response);
                              dispatch(
                                showSnackbar({
                                  severity: "success",
                                  message: response.data.message,
                                })
                              );
                            })
                            .catch(function (error) {
                              console.log(error);
                              dispatch(
                                showSnackbar({
                                  severity: "error",
                                  message: error.response.data.message,
                                })
                              );
                              // dispatch(
                              //   slice.actions.updateIsLoading({ isLoading: false, error: true })
                              // );
                            });
                          dispatch(refreshSidebarFun());
                          // handleClickOpen();
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
                            },
                            marginLeft: "10px", // Adjust the margin-left to move the box towards the right
                          }}
                          p={1.2}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems={"center"}
                            >
                              <Avatar>{group.chatName[0]}</Avatar>
                              <Stack spacing={0.3}>
                                <Typography color="white" variant="subtitle2">
                                  {group.chatName}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Box>
                      </motion.div>
                    );
                  })}
                </Stack>
              </Box>
            </Stack>

            {/* Chat Footer */}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Availablegroups;
