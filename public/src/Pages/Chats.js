import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch, Typography, InputBase, Button } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import Badge from "@mui/material/Badge";
import { ChatList } from "../Data/Icons";
import SimpleBar from "simplebar-react";
import { SimpleBarStyle } from "../components/Scrollbar";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const truncateText = (string, n) => {
    return string?.length > n ? `${string?.slice(0, n)}...` : string;
};

const ChatElement = ({ id, img, name, msg, time, unread, online }) => {
    return (
        <Box sx={{
            width: "100%",
            height: 60,
            borderRadius: 1,
            backgroundColor: "#404040"
        }}
            p={1.2}

        >
            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Stack direction="row" spacing={2}>
                    {" "}
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                        >
                            <Avatar alt={name} src={img} />
                        </StyledBadge>
                    ) : (
                        <Avatar alt={name} src={img} />
                    )}
                    <Stack spacing={0.3}>
                        <Typography color={"white"} variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{truncateText(msg, 10)}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1} alignItems={"center"}>
                    <Typography sx={{ fontWeight: 600 }} variant="caption">
                        {time}
                    </Typography>
                    <Badge
                        className="unread-count"
                        color="primary"
                        badgeContent={unread}
                    />
                </Stack>
            </Stack>

            {/* <Stack direction={"row"} alignItems={'center'} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2}>
                <StyledBadge overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">
                    <Avatar src={faker.image.avatar()} />
                </StyledBadge>
                <Stack spacing={0.3}>
                    <Typography color={"white"} variant="subtitle2">
                        Siddhi
                    </Typography>
                    <Typography color={"white"} variant="caption">
                        I Love You So much...
                    </Typography>
                </Stack>
                <Stack spacing={2} alignItems={"center"}>
                    <Typography color={"white"} sx={{fontWeight:600}} variant="caption">
                        9:36
                    </Typography>
                    <Badge color="primary" badgeContent={1}>

                    </Badge>
                </Stack>
                </Stack>

                
            </Stack> */}
        </Box>
    )
}

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));



const Chats = () => {

    const theme = useTheme();



    return (
        <>
            <div style={{ display: 'flex', margin: 0, padding: 0 }}>
                <Box sx={{
                    position: "relative",

                    width: 350,
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#000000"
                            : theme.palette.background,

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
                        <Stack direction={"column"} sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }} spacing={1}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack spacing={2.4}>
                                    <Typography color={"white"} variant="subtitle2">
                                        Pinned
                                    </Typography>
                                    {ChatList.filter((el) => el.pinned).map((el) => {
                                        return <ChatElement {...el} />
                                    })}
                                </Stack>

                                <Stack spacing={2.4}>
                                    <Typography color={"white"} variant="subtitle2">
                                        All Chats
                                    </Typography>
                                    {ChatList.filter((el) => !el.pinned).map((el) => {
                                        return <ChatElement {...el} />
                                    })}
                                </Stack>
                            </SimpleBarStyle>


                        </Stack>
                    </Stack>
                </Box>
            </div>
        </>
    );
};

export default Chats;