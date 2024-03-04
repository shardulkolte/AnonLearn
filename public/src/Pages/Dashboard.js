import React from 'react'
// import Sidebar from '../Layouts/Sidebar'
import GeneralApp from './GeneralApp'
import "./Dashboard.css";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { Navigate ,Outlet} from 'react-router-dom';







function Dashboard() {
  
  
  return (
    <>

      <Stack direction={'row'}>

        {/* <Sidebar /> */}
        <GeneralApp />
        <Outlet/>

      </Stack>

    </>
  )
}

export default Dashboard