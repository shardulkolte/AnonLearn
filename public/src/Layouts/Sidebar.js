import React, { useState } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import lo from "../Pages/logo.png";
import { Nav_Buttons, Profile_Menu } from "../Data/Icons";
import { Columns, Gear, UserCircle, UserPlus, Users } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../redux/slices/auth";
import Sidebar2 from "./Sidebar2";
import { FetchUsers } from "../redux/slices/app";

function Sidebar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit1 = () => {
    console.log("Submit function 1 called");
    navigate("/dashboard"); // Navigate to path1
  };

  const handleSubmit2 = () => {
    console.log("Submit function 2 called");
    navigate("/dashboard/availablegroups"); // Navigate to path2
  };

  const handleSubmit3 = () => {
    try {
      dispatch(FetchUsers());
    } catch (error) {
      console.error(error);
    }
    navigate("/dashboard/users"); // Navigate to path3
  };

  return (
    <>
      <Stack direction={"row"}>
        <Box
          borderRight={1}
          borderLeft={1}
          borderColor="#000"
          p={2}
          sx={{
            height: "100vh",
            width: 80,
            backgroundColor: "#505050",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ height: "100%" }}
            spacing={3}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                }}
              >
                <img src={lo} width={64} height={64} alt="logo"></img>
              </Box>
              <Stack
                sx={{ width: "max-content" }}
                spacing={3}
                direction={"column"}
                alignItems={"center"}
              >
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                  onClick={handleSubmit1}
                >
                  <UserCircle />
                </IconButton>
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                  onClick={handleSubmit2}
                >
                  <Users />
                </IconButton>
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                  onClick={handleSubmit3}
                >
                  <UserPlus />
                </IconButton>
              </Stack>
            </Stack>
            <Stack spacing={4} alignItems={"center"}>
              <Avatar
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {userData.data.username[0]}
              </Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Stack spacing={1} px={1}>
                  {Profile_Menu.map((el, idx) => (
                    <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                      <Stack
                        onClick={() => {
                          if (idx === 0) {
                            dispatch(LogoutUser());
                          }
                        }}
                        sx={{ width: 100 }}
                        direction="row"
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        {el.title}
                        {el.icon}
                      </Stack>
                    </MenuItem>
                  ))}
                </Stack>
              </Menu>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* <Sidebar2 /> */}
    </>
  );
}

export default Sidebar;
