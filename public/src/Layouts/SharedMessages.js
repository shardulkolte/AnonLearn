import React from 'react'
import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft, X } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { Shared_docs, Shared_links } from '../Data/Icons';
import { DocMsg, LinkMsg } from './MsgTypes';

const SharedMessages = () => {

    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 347, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>

                {/* Header */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0,  0, 0.25)",
                    width: "100%",
                    backgroundColor: "#202020", color: "white"
                }}>
                    <Stack direction={'row'} sx={{ height: "100%", p: 2.3 }} alignItems={'center'} spacing={3}>
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"));
                        }}>
                            <CaretLeft color='white' />
                        </IconButton>
                        <Typography variant='subtitle2'>
                            Shared Messages
                        </Typography>


                    </Stack>

                </Box>

                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>

                {/* Body */}
                <Stack sx={{
                    height: "100%",
                    position: "relative",
                    flexGrow: 1,
                    overflowY: "scroll",
                    backgroundColor: "#505050"
                }}
                    padding={3}
                    spacing={3}>

                    {/* <Conversation starred={true} /> */}
                    {(() => {
                        switch (value) {
                            case 0:
                                return (
                                    <Grid container rowSpacing={2} columnSpacing={0.001}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                                            return <Grid item xs={4}>
                                                <img
                                                    src={faker.image.avatar()}
                                                    alt={faker.name.fullName()}
                                                    height={70} width={70}
                                                />
                                            </Grid>
                                        })}
                                    </Grid>
                                );
                            case 1:
                                return Shared_links.map((el) => <LinkMsg el={el} />);

                            case 2:
                                return Shared_docs.map((el) => <DocMsg el={el} />);

                            default:
                                break;
                        }
                    })()}

                </Stack>

            </Stack>
        </Box>
    )
}

export default SharedMessages