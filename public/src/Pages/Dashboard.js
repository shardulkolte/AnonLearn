import React from 'react'
import Sidebar from '../Layouts/Sidebar'
import Chats from './Chats'
import "./Dashboard.css";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";






function Dashboard() {
  return (
    <>
    <div style={{ display: 'flex' }}>
      <Box style={{ marginRight: '0px' }}>
        {/* Content for the first Box */}
        <Sidebar />
      </Box>
      <Box>
        {/* Content for the second Box */}
        <Chats />
      </Box>
    </div>

    
      {/* <Box>
        <Stack direction={'column'}>
          
          <div className="dashb">
            
          </div>
        </Stack>
      </Box> */}
    </>
  )
}

export default Dashboard