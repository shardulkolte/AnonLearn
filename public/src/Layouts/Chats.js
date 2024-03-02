import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch, Typography, InputBase, Button } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import Badge from "@mui/material/Badge";
import { ChatList } from "../Data/Icons";
import SimpleBar from "simplebar-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../components/Search";
import ChatElement from "../components/ChatElement";
// import { SimpleBarStyle } from "../components/Scrollbar";

  
const Chats = () => {

    const theme = useTheme();



    return (
        <>
            <div style={{ display: 'flex', margin: 0, padding: 0 }}>
                <Box borderRight={1}
                borderLeft={1}
                    borderColor="#000" 
                    sx={{
                    position: "relative",
                    
                    width: 320,
                    backgroundColor:"#202020",
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    
                }}>
                    <Stack padding={3} spacing={2} sx={{ height: "100vh", }}>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                            <Typography variant="h5" color={"white"}>Chats</Typography>
                            <IconButton>
                                <CircleDashed color="white"></CircleDashed>
                            </IconButton>
                        </Stack>
                        <Stack sx={{ width: "100%" }}>
                            <Search >
                                <SearchIconWrapper >
                                    <MagnifyingGlass color="black" />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder="Search..."></StyledInputBase>
                            </Search>
                        </Stack>
                        <Stack spacing={1}>
                            <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                                <ArchiveBox size={24} color="white" />
                                <Button>Archive</Button>
                            </Stack>
                            <Divider sx={{
                                borderTopWidth: 1, // Set the thickness of the line
                                borderTopStyle: 'solid', // Use a solid line
                                borderTopColor: 'white', // Set the color of the line
                                fontWeight: 'bold', // Make the divider bold
                                margin: '20px 0', // Add some margin for spacing
                            }} />
                        </Stack>
                        <Stack direction={"column"} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }} spacing={2}>
                            {/* <Stack spacing={2}> */}

                            {/* <SimpleBarStyle > */}
                                <Stack spacing={2.4}>
                                    <Typography  variant="subtitle2" sx={{color:"white"}}>
                                        Pinned
                                    </Typography>
                                    {ChatList.filter((el) => el.pinned).map((el) => {
                                        return <ChatElement {...el} />
                                    })}
                                </Stack>

                                <Stack spacing={2.4}>
                                    <Typography variant="subtitle2" sx={{color:"white" }}>
                                        All Chats
                                    </Typography>
                                    {ChatList.filter((el) => !el.pinned).map((el) => {
                                        return <ChatElement {...el} />
                                    })}
                                </Stack>
                                {/* </SimpleBarStyle> */}
                            
                            {/* </Stack> */}



                        </Stack>
                    </Stack>
                </Box>
            </div>
        </>
    );
};

export default Chats;