import {
  Avatar,
  Box,
  Stack,
  Typography,
  IconButton,
  TextField,
  Skeleton,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { PaperPlaneTilt, Trash } from "phosphor-react";
import { useDispatch } from "react-redux";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { useParams } from "react-router-dom";
import { myContext } from "../Pages/Dashboard";
import axios from "axios";

import io from "socket.io-client";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const ENDPOINT = "http://localhost:3001";
var socket, chat;

const ChatArea = ({ props }) => {
  const [openPicker, setOpenPicker] = React.useState(false);
  const dispatch = useDispatch();
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams._id.split("&");
  // console.log(chat_id, chat_user);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessages] = useState([]);
  const [allMessagesCopy, setAllMessagesCopy] = useState([]);

  // console.log("Chat area id : ", chat_id._id);
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext);
  const [loaded, setloaded] = useState(false);
  const [socketConnectionStatus, setSocketConnectionStatus] = useState(false);
  const sendMessage = () => {
    var data = null;
    // console.log("SendMessage Fired to", chat_id._id);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .post(
        "http://localhost:3001/message/",
        {
          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then(({ response }) => {
        data = response;
        console.log("Message Fired");
      });
    socket.emit("newMessage", data);
  };
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // connect to socket
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", userData);
    socket.on("connection", () => {
      setSocketConnectionStatus(!socketConnectionStatus);
    });
  }, []);

  //new message recieved
  useEffect(() => {
    socket.on("message recieved", (newMessage) => {
      if (!allMessagesCopy || allMessagesCopy._id !== newMessage._id) {
        // setAllMessages([...allMessages, newMessage]);
      } else {
        setAllMessages([...allMessages], newMessage);
      }
    });
  });

  //fetch chats
  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get("http://localhost:3001/message/" + chat_id, config)
      .then(({ data }) => {
        setAllMessages(data);
        setloaded(true);
        socket.emit("join chat", chat_id);
        // console.log("Data from Acess Chat API ", data);
      });
    setAllMessagesCopy(allMessages);
    // scrollToBottom();
  }, [refresh, chat_id, userData.data.token, allMessages]);

  if (!loaded) {
    return (
      <div
        style={{
          border: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            borderRadius: "10px",
            flexGrow: "1",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
      </div>
    );
  } else {
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
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Box>
                <Avatar>{chat_user[0]}</Avatar>
              </Box>
              <Stack spacing={0.2}>
                <Typography variant="subtitle2" color={"white"}>
                  {chat_user}
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
          sx={{
            flexGrow: 1,
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
          spacing={1}
        >
          {allMessages
            .slice(0)
            // .reverse()
            .map((message, index) => {
              const sender = message.sender;
              const self_id = userData.data._id;
              if (sender._id === self_id) {
                // console.log("I sent it ");
                return <MessageSelf props={message} key={index} />;
              } else {
                // console.log("Someone Sent it");
                return <MessageOthers props={message} key={index} />;
              }
            })}
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
              {/* <ChatInput /> */}
              <StyledInput
                fullWidth
                placeholder="Write a message..."
                variant="filled"
                value={messageContent}
                onChange={(e) => {
                  setMessageContent(e.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    sendMessage();
                    setMessageContent("");
                    setRefresh(!refresh);
                  }
                }}
                sx={{
                  backgroundColor: "#ECECEC",
                  borderRadius: 2,
                  outlineWidth: 0,
                  outlineColor: "black",
                }}
              ></StyledInput>
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
                <IconButton
                  onClick={() => {
                    sendMessage();
                    setRefresh(!refresh);
                  }}
                >
                  <PaperPlaneTilt color="black" />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    );
  }
};
export default ChatArea;
