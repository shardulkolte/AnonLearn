import React from 'react'
import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft, X } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { Shared_docs, Shared_links } from '../Data/Icons';
import { DocMsg, LinkMsg } from './MsgTypes';
import Message from './Message';

const SharedMessages = () => {

    const dispatch = useDispatch();

    

    return (
        <Box sx={{ width: 340, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>

                {/* Header */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0,  0, 0.25)",
                    width: "100%",
                    backgroundColor: "#202020", color: "white"
                }}>
                    <Stack direction={'row'} sx={{ height: "100%", p: 2.3 }} alignItems={'center'} spacing={3} padding={3}>
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"));
                        }}>
                            <CaretLeft color='white' />
                        </IconButton>
                        <Typography variant='subtitle2'>
                            Starred Messages
                        </Typography>


                    </Stack>

                </Box>

                

                {/* Body */}
                <Stack sx={{
                    height: "100%",
                    position: "relative",
                    flexGrow: 1,
                    overflowY: "scroll",
                    backgroundColor: "#505050"
                }}
                    padding={3}
                    spacing={2}>

                    {/* <Conversation starred={true} /> */}
                    <Message/>

                </Stack>

            </Stack>
        </Box>
    )
}

export default SharedMessages