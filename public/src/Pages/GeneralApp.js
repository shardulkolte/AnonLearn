import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";
import Chats from "../Layouts/Chats";
import Conversation from "../Layouts/Conversation";
import Sidebar from '../Layouts/Sidebar'





const GeneralApp = () => {

  const theme = useTheme();
  const [searchParams] = useSearchParams();



  return (
    <>
      {/* {chats} */}
      <Stack direction={'row'} sx={{ width: "100%" }}>
        <Sidebar />
        <Chats />
        <Box
          sx={{
            height: "100vh",
            width: "calc(100vw - 420px)",
            backgroundColor: "#949494"
          }}>
          {/* Conversation */}
          <Conversation />
        </Box>
        {/* Contact */}
      </Stack>
    </>
  );
};

export default GeneralApp;