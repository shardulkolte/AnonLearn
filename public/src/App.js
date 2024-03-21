import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Aboutus from "./Pages/Aboutus";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Layouts/Settings";
import Group from "./Layouts/Group";
import Profile from "./Layouts/Profile";
import GeneralApp from "./Pages/GeneralApp";
import MainLayout from "./Layouts/MainLayout";
import ResetPassword from "./Pages/ResetPassword";
import NewPassword from "./Pages/NewPassword";
import Verify from "./Pages/Verify";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackBar } from "./redux/slices/app";
import User_groups from "./Layouts/Users_group";
import Users from "./Pages/Users";
import Availablegroups from "./Pages/Availablegroups";

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const App = () => {
  const dispatch = useDispatch();
  const { severity, message, open } = useSelector(
    (state) => state.app.snackbar
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<MainLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/auth/new-password" element={<NewPassword />} />
            <Route path="/auth/verify" element={<Verify />} />
          </Route>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<GeneralApp />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/group" element={<Group />} />
            <Route
              path="/dashboard/availablegroups"
              element={<Availablegroups />}
            />
          </Route>
        </Routes>
      </Router>

      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            dispatch(closeSnackBar());
          }}
        >
          <Alert
            onClose={() => {
              console.log("This is clicked");
              dispatch(closeSnackBar());
            }}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
