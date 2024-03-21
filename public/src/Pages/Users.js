import React, { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import CreateGroup from "../components/Group/CreateGroup";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import User_groups from "../Layouts/Users_group";
import axios from "axios";
import { myContext } from "./Dashboard";
import lo from "../Pages/logo.png";
import Onlineuserlist from "../components/onlineuserlist";
import { faker } from "@faker-js/faker";

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

function Users() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openPicker, setOpenPicker] = React.useState(false);

  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const { refresh, setRefresh } = useContext(myContext);

  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(
    (getState) => {
      console.log("Users refreshed");
      const config = {
        headers: {
          Authorization: `Bearer ${userData.data.token}`,
        },
      };
      axios.get("http://localhost:3001/user/get-users", config).then((data) => {
        console.log("UData refreshed in Users panel ");
        setUsers(data.data);
        // setRefresh(!refresh);
      });
    },
    [refresh]
  );

  return (
    <>
      {/* {chats} */}
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* <Sidebar /> */}
        {/* Left */}

        <Box
          sx={{
            height: "100vh",
            width: sideBar.open ? "calc(100vw - 750px)" : "calc(100vw - 400px)",
            backgroundColor: "#949494",
          }}
        >
          {/* Conversation */}
          {/* {chatconversations.map((conv) => {
            return <Conversation props={conv} />;
          })} */}
          {/* <User_groups /> */}
          {/* ................................................................................... */}
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
                        Online Users
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
                  {users.map((user, index) => {
                    return (
                      <motion.div
                        whileHover={{ scale: 1.01 }} // Scale effect on hover
                        whileTap={{ scale: 0.97 }} // Scale effect on click
                        key={index}
                        onClick={() => {}}
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
                              <Avatar src={faker.image.avatar()}></Avatar>
                              <Stack spacing={0.3}>
                                <Typography color="white" variant="subtitle2">
                                  {user.username}
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
          {/* ................................................................................... */}
        </Box>
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Users;
