import {
  Avatar,
  Box,
  Stack,
  Badge,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  PaperPlaneTilt,
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
import { faker } from "@faker-js/faker";

const ChatInput = () => {
  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
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

const ChatArea = ({ props }) => {
  const [openPicker, setOpenPicker] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Box
        padding={2}
        borderRight={1}
        borderBottom={1}
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
          >
            <Box>
              <Avatar src={faker.image.avatar()}></Avatar>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2" color={"white"}>
                {props.name}
              </Typography>
              <Typography variant="caption" color={"white"}>
                {props.timeStamp}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton>
              <Trash color="white" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* Msg */}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
        spacing={1}
      >
        <MessageOthers />
        <Messageself />
        <MessageOthers />
        <Messageself />
        <MessageOthers />
        <Messageself />
        <MessageOthers />
        <Messageself />
      </Box>

      {/* Chat Footer */}
      <Box
        p={2}
        borderRight={1}
        borderTop={1}
        borderColor="#000"
        sx={{
          width: "100%",
          backgroundColor: "#202020",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
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
            >
              {/* <Picker data={data} onEmojiSelect={console.log} theme="dark" /> */}
            </Box>
            <ChatInput setOpenPicker={setOpenPicker} />
          </Stack>

          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: "#ECECEC",
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
              }}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="black" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
export default ChatArea;
