import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, Navigate, Outlet, useSearchParams } from "react-router-dom";
import Chats from "../Layouts/Chats";
import Conversation from "../Layouts/Conversation";
import Sidebar from '../Layouts/Sidebar'
import Contact from "../Layouts/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../Layouts/SharedMessages";
import StarredMessages from "../Layouts/StarredMessages";
import Main from "../Layouts/main";






const GeneralApp = () => {
  const {sideBar} = useSelector((store)=>store.app);

  const theme = useTheme();
  const [searchParams] = useSearchParams();

 

  return (
    
    <>
      {/* {chats} */}
      <Stack direction={'row'} sx={{ width: "100%" }}>
        {/* <Sidebar /> */}
        <Chats />
        {/* <Box sx={{
          height:"100vh",
          width: "calc(100vw-80px)"
        }}>
          <Chats />
          
        </Box> */}
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
        {sideBar.open &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages/>;

              case "SHARED":
                return <SharedMessages/>;

              default:
                break;
            }
          })()}
        
      </Stack>
    </>
  );
};

export default GeneralApp;