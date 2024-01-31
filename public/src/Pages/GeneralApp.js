import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";
import Chats from "./Chats";
import Conversation from "../Layouts/Conversation";




const GeneralApp = () => {

  const theme = useTheme();
  const [searchParams] = useSearchParams();



  return (
    <>
      {/* {chats} */}
      <Stack direction={'row'} sx={{ width: "100%" }}>

        <Chats />
        <Box 
        sx={{ height: "100%", 
        width: "calc(100vw - 420px)", 
        backgroundColor: "#949494" }}>
          {/* Conversation */}
          <Conversation />

        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;