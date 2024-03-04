import React, { useState } from 'react'
import Sidebar from './Sidebar'

import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import { faker } from '@faker-js/faker'
import { Navigate } from 'react-router-dom'


function Settings() {

 

  const [openTheme, setOpenTheme] = useState(false);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} color='white' />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} color='white' />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} color='white' />,
      title: "Security",
      onclick: () => {},
    },
    // {
    //   key: 3,
    //   icon: <PencilCircle size={20} color='white' />,
    //   title: "Theme",
    //   onclick: handleOpenTheme,
    // },
    {
      key: 3,
      icon: <Image size={20} color='white' />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Note size={20} color='white' />,
      title: "Request Account Info",
      onclick: () => {},
    },
    // {
    //   key: 5,
    //   icon: <Keyboard size={20} color='white' />,
    //   title: "Keyboard Shortcuts",
    //   onclick: handleOpenShortcuts,
    // },
    {
      key: 5,
      icon: <Info size={20} color='white' />,
      title: "Help",
      onclick: () => {},
    },
  ];

 


  return (
    <>
      {/* {chats} */}
      <Stack direction={'row'} sx={{ width: "100%" }}>
        <Sidebar />
        {/* Left Pane */}
        <Box
          sx={{
            overflowY: "scroll",

            height: "100vh",
            width: 320,
            backgroundColor: "#202020",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"white"} />
              </IconButton>

              <Typography variant="h5" color={'white'}>Settings</Typography>
            </Stack>

            {/* Profile Edit Form */}
            <Stack direction="row" spacing={3}>
              <Avatar
                src={faker.image.avatar()}
                sx={{ height: 56, width: 56 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article" color={'white'}>{`${faker.name.firstName()} ${faker.name.lastName()}`}</Typography>
                <Typography variant="body2" color={'white'}>{faker.random.words()}</Typography>
              </Stack>
            </Stack>
            {/* <ProfileForm /> */}

            {/* List of options */}
            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <>
                    <Stack
                      onClick={onclick}
                      sx={{ cursor: "pointer" }}
                      spacing={2}
                    >
                      <Stack alignItems={"center"} direction="row" spacing={2}>
                        {icon}
                        <Typography variant="body2" color={'white'}>{title}</Typography>
                      </Stack>
                      {key !== 5 && <Divider sx={{
                                borderTopWidth: 1, // Set the thickness of the line
                                borderTopStyle: 'solid', // Use a solid line
                                borderTopColor: 'white', // Set the color of the line
                                fontWeight: 'bold', // Make the divider bold
                                margin: '20px 0', // Add some margin for spacing
                            }} />}
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Box>

        {/* Right Pane */}
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 400px )",
            backgroundColor: "#202020",
            // borderBottom: "6px solid #0162C4",
          }}
        ></Box>
      </Stack>
      {/* {openTheme && (
        <ThemeDialog open={openTheme} handleClose={handleCloseTheme} />
      )}
      {openShortcuts && <ShortcutDialog open={openShortcuts} handleClose={handleCloseShortcuts} /> } */}
    </>
  )
}

export default Settings