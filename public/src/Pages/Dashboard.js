import React from 'react'
// import Sidebar from '../Layouts/Sidebar'
import GeneralApp from './GeneralApp'
import "./Dashboard.css";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";






function Dashboard() {
  return (
    <>

      <Stack direction={'row'}>

        {/* <Sidebar /> */}
        <GeneralApp />

      </Stack>

    </>
  )
}

export default Dashboard