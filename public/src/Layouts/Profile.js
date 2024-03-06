import React, { useState } from 'react'
import Sidebar from './Sidebar'

import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react'
import { faker } from '@faker-js/faker'
import ProfileForm from '../components/hook-form/ProfileForm'
import { Navigate } from 'react-router-dom'



function Profile() {

  
  
  return (
    <>
      {/* {chats} */}
      <Stack direction={'row'} sx={{ width: "100%" }}>
        {/* <Sidebar /> */}
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
                <CaretLeft size={24} color={"white"}  />
              </IconButton>

              <Typography variant="h5" color={'white'}>Profile</Typography>
            </Stack>

            {/* Profile Edit Form */}
            <ProfileForm />
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
      
    </>
  )
}

export default Profile