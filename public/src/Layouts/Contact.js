import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ToggleSidebar } from '../redux/slices/app'
import { faker } from '@faker-js/faker'
import AntSwitch from '../components/AntSwitch'

const Contact = () => {

    const dispatch = useDispatch();
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/* Header */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0,  0, 0.25)",
                    width: "100%",
                    backgroundColor: "#202020", color: "white"
                }}>
                    <Stack direction={'row'} sx={{ height: "100%", p: 2 }} alignItems={'center'} justifyContent={'space-between'} spacing={3}>
                        <Typography variant='subtitle2'>
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => {
                            dispatch(ToggleSidebar());
                        }}>
                            <X color='white' />
                        </IconButton>

                    </Stack>

                </Box>
                {/* Body */}
                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll", backgroundColor: "#505050" }} padding={3} spacing={3}>
                    {/* Avatar */}
                    <Stack alignItems={'center'} direction={'row'} spacing={2}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5}>
                            <Typography variant='article' fontWeight={600} color={'white'}>{faker.name.fullName()}</Typography>
                        </Stack>
                    </Stack>

                    <Divider sx={{
                        borderTopWidth: 1, // Set the thickness of the line
                        borderTopStyle: 'solid', // Use a solid line
                        borderTopColor: 'white', // Set the color of the line
                        fontWeight: 'bold', // Make the divider bold
                        margin: '20px 0', // Add some margin for spacing
                    }} />
                    {/* About */}
                    <Stack spacing={0.5}>
                        <Typography variant="article" >
                            About
                        </Typography>
                        <Typography variant="body2" color={'white'}>
                            Discover,Share,Thrive with AnonLearn
                        </Typography>
                    </Stack>
                    <Divider sx={{
                        borderTopWidth: 1, // Set the thickness of the line
                        borderTopStyle: 'solid', // Use a solid line
                        borderTopColor: 'white', // Set the color of the line
                        fontWeight: 'bold', // Make the divider bold
                        margin: '20px 0', // Add some margin for spacing
                    }} />
                    {/* Media */}
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={"space-between"}
                    >
                        <Typography variant="subtitle2" color={'white'}>Media, Links & Docs</Typography>
                        <Button sx={{ color: "white" }}
                            //   onClick={() => {
                            //     dispatch(UpdateSidebarType("SHARED"));
                            //   }}
                            endIcon={<CaretRight color='white' />}
                        >
                            401
                        </Button>
                    </Stack>
                    {/* Images */}
                    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'} sx={{ position: "relative", flexGrow: 1, overflowX: "scroll",}}>
                        {[1, 2, 3,4,5,6].map((el) => (
                            <Box >
                                <img src={faker.image.nature()} alt={faker.name.fullName()} height={70} width={70}></img>
                            </Box>
                            
                        ))}
                        
                    </Stack>
                    <Divider sx={{
                        borderTopWidth: 1, // Set the thickness of the line
                        borderTopStyle: 'solid', // Use a solid line
                        borderTopColor: 'white', // Set the color of the line
                        fontWeight: 'bold', // Make the divider bold
                        margin: '20px 0', // Add some margin for spacing
                    }} />

                    {/* Star msg */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={"space-between"}
                    >
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Star size={21} color='white' />
                            <Typography variant="subtitle2" color={'white'}>Starred Messages</Typography>
                        </Stack>

                        <IconButton
                        //   onClick={() => {
                        //     dispatch(UpdateSidebarType("STARRED"));
                        //   }}
                        >
                            <CaretRight color='white' />
                        </IconButton>
                    </Stack>

                    <Divider sx={{
                        borderTopWidth: 1, // Set the thickness of the line
                        borderTopStyle: 'solid', // Use a solid line
                        borderTopColor: 'white', // Set the color of the line
                        fontWeight: 'bold', // Make the divider bold
                        margin: '20px 0', // Add some margin for spacing
                    }} />
                    {/* Mute Notification */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={"space-between"}
                    >
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Bell size={21} color='white' />
                            <Typography variant="subtitle2" color={'white'}>Mute Notifications</Typography>
                        </Stack>

                        <AntSwitch />
                    </Stack>
                    <Divider sx={{
                        borderTopWidth: 1, // Set the thickness of the line
                        borderTopStyle: 'solid', // Use a solid line
                        borderTopColor: 'white', // Set the color of the line
                        fontWeight: 'bold', // Make the divider bold
                        margin: '20px 0', // Add some margin for spacing
                    }} />
                    {/* Block and delete  */}
                    <Stack direction="row" alignItems={"center"} spacing={2}>
                        <Button
                            //   onClick={() => {
                            //     setOpenBlock(true);
                            //   }}
                            fullWidth
                            startIcon={<Prohibit color='black' />}
                            variant="outlined"
                            sx={{ backgroundColor: "white", color: "black" }}
                        >
                            Block
                        </Button>
                        <Button
                            //   onClick={() => {
                            //     setOpenDelete(true);
                            //   }}
                            fullWidth
                            startIcon={<Trash color='black' />}
                            variant="outlined"
                            sx={{ backgroundColor: "white", color: "black" }}

                        >
                            Delete
                        </Button>
                    </Stack>
                </Stack>

            </Stack>

        </Box>
    )
}

export default Contact