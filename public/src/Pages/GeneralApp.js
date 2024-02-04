import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";
import Chats from "../Layouts/Chats";
import Conversation from "../Layouts/Conversation";
import Sidebar from '../Layouts/Sidebar'
import Contact from "../Layouts/Contact";
import { useSelector } from "react-redux";





const GeneralApp = () => {
  const {sideBar} = useSelector((store)=>store.app);

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
            width: sideBar.open ? "calc(100vw - 720px)": "calc(100vw - 400px)" ,
            backgroundColor: "#949494"
          }}>
          {/* Conversation */}
          <Conversation />
        </Box>
        {/* Contact */}
        {sideBar.open && <Contact/>}
        
      </Stack>
    </>
  );
};

export default GeneralApp;