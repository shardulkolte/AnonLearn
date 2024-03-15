import React, { useState } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import lo from "../Pages/logo.png";
import { Nav_Buttons, Profile_Menu } from "../Data/Icons";
import { Columns, Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../redux/slices/auth";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/dashboard";

    case 1:
      return "/dashboard/group";

    case 2:
      return "/dashboard/settings";

    default:
      break;
  }
};

function Sidebar() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // if(!isAuthenticated){
  //     return <Navigate to="/login" />;
  //   }

  return (
    <>
      <Box
        borderRight={1}
        borderLeft={1}
        borderColor="#000"
        p={2}
        sx={{
          height: "100vh",
          width: 80,

          backgroundColor: "#505050",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
              }}
            >
              <img src={lo} width={64} height={64}></img>
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              spacing={3}
              direction={"column"}
              alignItems={"center"}
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box sx={{ backgroundColor: "#A6A6A6", borderRadius: 1.5 }}>
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                      navigate(getPath(el.index));
                    }}
                    sx={{
                      width: "max-content",
                      color: "#000",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider
                sx={{
                  borderTopWidth: 1, // Set the thickness of the line
                  borderTopStyle: "solid", // Use a solid line
                  borderTopColor: "white", // Set the color of the line
                  fontWeight: "bold", // Make the divider bold
                  margin: "20px 0", // Add some margin for spacing
                }}
              />
              {selected === 2 ? (
                <Box
                  sx={{
                    backgroundColor: "#A6A6A6",
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    navigate(getPath(2));
                    setSelected(2);
                  }}
                  sx={{
                    width: "max-content",
                    color: "#000",
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack spacing={4} alignItems={"center"}>
            {/* switch */}

            <Avatar
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              src={faker.image.avatar()}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Stack spacing={1} px={1}>
                {Profile_Menu.map((el, idx) => (
                  <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                    <Stack
                      onClick={() => {
                        if (idx === 0) {
                          navigate("/dashboard/profile");
                        } else if (idx === 1) {
                          navigate("/dashboard/settings");
                        } else {
                          // navigate("/auth/login");
                          dispatch(LogoutUser());
                          // socket.emit("end", {user_id});
                        }
                      }}
                      sx={{ width: 100 }}
                      direction="row"
                      alignItems={"center"}
                      justifyContent="space-between"
                    >
                      {el.title}
                      {el.icon}
                    </Stack>
                    {/* <Stack
                      sx={{ width: 100 }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      {el.title}
                      {el.icon}
                    </Stack> */}
                  </MenuItem>
                ))}
              </Stack>
            </Menu>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Sidebar;
