import {
  Avatar,
  Box,
  Stack,
  Badge,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Fab,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Faker, faker } from "@faker-js/faker";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Smiley,
  Image,
  Sticker,
  Camera,
  File,
  User,
  Trash,
} from "phosphor-react";
import Message from "./Message";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { dispatch } from "../redux/store";
import { ToggleSidebar } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import MessageOthers from "./MessageOthers";
import Messageself from "./MessageSelf";
import lo from "../Pages/logo.png";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../components/Search";
import Onlineuserlist from "../components/onlineuserlist";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const User_groups = ({ props }) => {
  const [openPicker, setOpenPicker] = React.useState(false);
  const dispatch = useDispatch();

  const [conversations, setConversations] = useState([
    {
      name: "Group#1",
    },
    {
      name: "Group#2",
    },
    {
      name: "Group#3",
    },
    {
      name: "Group#4",
    },
    {
      name: "Group#5",
    },
    {
      name: "Group#6",
    },
    {
      name: "Group#7",
    },
    {
      name: "Group#8",
    },
    {
      name: "Group#9",
    },
  ]);
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} p={1} spacing={4}>
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
            {conversations.map((conv) => {
              return <Onlineuserlist props={conv} />;
            })}
          </Stack>
        </Box>
      </Stack>

      {/* Chat Footer */}
    </Stack>
  );
};
export default User_groups;
