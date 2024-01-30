import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack , Switch} from "@mui/material";
import lo from '../Pages/logo.png';
import { Nav_Buttons } from '../Data/Icons';
import { Columns, Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';



function Sidebar() {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);


  return (
    <>
      <Box
        p={2}
        sx={{
          height: "100vh",
          width: 90,

          backgroundColor:
            theme.palette.mode === "light"
              ? "#505050"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}>
        <Stack direction={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{ height: "100%" }}
          spacing={3}>
          <Stack alignItems={'center'} spacing={4}>
            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,

            }}>
              <img src={lo} width={64} height={64}></img>


            </Box>
            <Stack spacing={3}>
              {Nav_Buttons.map((el) => (
                el.index === selected ?
                  <Box sx={{ backgroundColor: '#A6A6A6', borderRadius: 1.5 }}>
                    <IconButton sx={{ width: 'max-content', color: '#fff' }} key={el.index}>
                      {el.icon}
                    </IconButton>
                  </Box>
                  : <IconButton onClick={() => {
                    setSelected(el.index)
                  }}
                    sx={{ width: 'max-content', color: '#000' }}
                    key={el.index}>
                    {el.icon}
                  </IconButton>

              ))}
              <Divider sx={{
                borderTopWidth: 1, // Set the thickness of the line
                borderTopStyle: 'solid', // Use a solid line
                borderTopColor: 'black', // Set the color of the line
                fontWeight: 'bold', // Make the divider bold
                margin: '20px 0', // Add some margin for spacing
              }} />
              {selected === 3 ?
                <Box sx={{ backgroundColor: '#A6A6A6', borderRadius: 1.5 }}>
                  <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                    <Gear />
                  </IconButton>
                </Box>
                : (<IconButton onClick={() => {
                  setSelected(3);
                }} sx={{ width: 'max-content', color: '#000' }}>
                  <Gear />
                </IconButton>
                )}
            </Stack >
          </Stack>
          <Stack spacing={4} alignItems={'center'}>
            {/* switch */}
           
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
    </>

  );
}

export default Sidebar;
