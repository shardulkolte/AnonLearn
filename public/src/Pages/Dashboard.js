import React from 'react'
// import Sidebar from '../Layouts/Sidebar'
import GeneralApp from './GeneralApp'
import "./Dashboard.css";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { Navigate ,Outlet} from 'react-router-dom';
import Sidebar from '../Layouts/Sidebar';
import Main from '../Layouts/main';







function Dashboard() {
  
  
  return (
    <>

      <Stack direction={'row'}>

        <Sidebar />
        <Main/>
       

      </Stack>

    </>
  )
}

export default Dashboard