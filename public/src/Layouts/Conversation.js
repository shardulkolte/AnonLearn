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
import MessageOthers from "../components/MessageOthers";
import Messageself from "../components/MessageSelf";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = React.useState(false);
  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      //   InputProps={{
      //     disableUnderline: true,
      //     startAdornment: (
      //       <Stack sx={{ width: "max-content" }}>
      //         <Stack
      //           sx={{
      //             position: "relative",
      //             display: openActions ? "inline-block" : "none",
      //           }}
      //         >
      //           {Actions.map((el) => (
      //             <Tooltip placement="right" title={el.title}>
      //               <Fab
      //                 onClick={() => {
      //                   setOpenActions(!openActions);
      //                 }}
      //                 sx={{
      //                   position: "absolute",
      //                   top: -el.y,
      //                   backgroundColor: el.color,
      //                 }}
      //                 aria-label="add"
      //               >
      //                 {el.icon}
      //               </Fab>
      //             </Tooltip>
      //           ))}
      //         </Stack>
      //         <InputAdornment>
      //           <IconButton
      //             onClick={() => {
      //               setOpenActions((prev) => !prev);
      //             }}
      //           >
      //             <LinkSimple color="black" />
      //           </IconButton>
      //         </InputAdornment>
      //       </Stack>
      //     ),
      //     endAdornment: (
      //       <InputAdornment>
      //         <IconButton
      //           onClick={() => {
      //             setOpenPicker((prev) => !prev);
      //           }}
      //         >
      //           <Smiley color="black" />
      //         </IconButton>
      //       </InputAdornment>
      //     ),
      //   }}
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

const Conversation = ({ props }) => {
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
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar>{props.name[0]}</Avatar>
              </StyledBadge>
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
export default Conversation;
