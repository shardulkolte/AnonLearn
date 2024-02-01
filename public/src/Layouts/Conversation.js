import {
    Avatar,
    Box,
    Stack,
    Badge,
    Typography,
    IconButton,
    Divider,
    TextField,
    InputAdornment
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Faker, faker } from '@faker-js/faker';
import {
    CaretDown,
    LinkSimple,
    MagnifyingGlass,
    PaperPlaneTilt,
    Smiley
} from 'phosphor-react';
import Message from './Message';


const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px !important",
        paddingBottom: "12px !important",
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const Conversation = () => {
    return (
        
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            {/* Chat Header */}
            <Box
                padding={2}
                borderRight={1}
                borderBottom={1}
                borderColor="#000"
                sx={{

                    width: "100%",
                    backgroundColor: "#202020",
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                }}>
                <Stack alignItems={'center'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    sx={{ width: "100%", height: "100%" }}>
                    <Stack direction={'row'} spacing={2}>
                        <Box>
                            <StyledBadge overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                variant="dot">
                                <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                            </StyledBadge>
                        </Box>
                        <Stack spacing={0.2}>
                            <Typography variant='subtitle2' color={"white"}>{faker.name.fullName()}</Typography>
                            <Typography variant='caption' color={"white"}>Online</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <IconButton>
                            <MagnifyingGlass color='white' />
                        </IconButton>
                        <Divider orientation='vertical' flexItem
                            variant="middle" sx={{ backgroundColor: 'white' }} />
                        <IconButton>
                            <CaretDown color='white' />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>

            {/* Msg */}
            <Box width={"100%"} sx={{ flexGrow: 1,height:"100%",overflowY:"scroll" }}>
                <Message/>
            </Box>

            {/* Chat Footer */}
            <Box
                p={2}
                borderRight={1}
                borderTop={1}
                borderColor="#000"
                sx={{
                    width: "100%",
                    backgroundColor: "#202020",
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
                }}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <StyledInput
                        fullWidth
                        placeholder='Write a message...'
                        variant='filled'
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (<InputAdornment>
                                <IconButton>
                                    <LinkSimple color='black' />
                                </IconButton>
                            </InputAdornment>),
                            endAdornment: (<InputAdornment>
                                <IconButton>
                                    <Smiley color='black' />
                                </IconButton>
                            </InputAdornment>),
                        }}
                        sx={{ backgroundColor: '#ECECEC', borderRadius: 2, }} />
                    <Box sx={{ height: 48, width: 48, backgroundColor: "#ECECEC", borderRadius: 1.5 }}>
                        <Stack sx={{
                            height: '100%', width: '100%',
                        }} alignItems='center' justifyContent='center'
                        >
                            <IconButton>
                                <PaperPlaneTilt color='black' />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Stack>
        
    )
}
export default Conversation