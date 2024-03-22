import React, { useState } from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./myStyles.css";

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  const user = userData.data;
  const [groupName, setGroupName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("User Data from CreateGroups : ", userData);

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:3001/chat/createGroup",
      {
        name: groupName,
        users: '["65fbe55202a361995285b7ac","65f9241ec0038b78d6b4c510"]',
      },
      config
    );
    nav("/dashboard/availablegroups");
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to create a Group Named " + groupName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will create a create group in which you will be the admin and
              other will be able to join this group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                createGroup();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
        <Box
          sx={{
            height: "100vh",
            width: "calc(100vw - 400px)",
            backgroundColor: "#949494",
          }}
        >
          <Box marginTop={35} marginLeft={40} marginRight={40}>
            <div
              className={"createGroups-container" + (lightTheme ? "" : " dark")}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <input
                    placeholder="Enter Group Name"
                    className={"search-box" + (lightTheme ? "" : " dark")}
                    onChange={(e) => {
                      setGroupName(e.target.value);
                    }}
                  />
                  <Stack spacing={0.3}>
                    <IconButton
                      className={"icon" + (lightTheme ? "" : " dark")}
                      onClick={() => {
                        handleClickOpen();
                        // createGroup();
                      }}
                    >
                      <DoneOutlineRoundedIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default CreateGroups;
