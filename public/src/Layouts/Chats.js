import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import Badge from "@mui/material/Badge";
import { ChatList } from "../Data/Icons";
import SimpleBar from "simplebar-react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../components/Search";
import ChatElement from "../components/ChatElement";
import { useSelector } from "react-redux";
import NoChat from "../assets/Illustration/NoChat";
// import { SimpleBarStyle } from "../components/Scrollbar";

const Chats = () => {
  const theme = useTheme();
  const { sideBar, chat_type, room_id } = useSelector((store) => store.app);

  return (
    <>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
        <Box
          sx={{
            height: "100vh",
            width: "calc(100vw - 400px)",
            backgroundColor: "#949494",
          }}
        >
          {/* Conversation */}
          {/* {chatconversations.map((conv) => {
            return <Conversation props={conv} />;
          })} */}
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
            flex={0.7}
            display="flex"
            flexDirection="column"
          >
            <NoChat />
            <Typography
              variant="subtitle2"
              sx={{ color: "black", fontSize: "1.3rem" }}
            >
              Select a conversation or start a new one
            </Typography>
          </Stack>

          {/* {room_id !== 0 && chat_type === "individual" ? (
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
          )} */}
        </Box>
      </div>
    </>
  );
};

export default Chats;
