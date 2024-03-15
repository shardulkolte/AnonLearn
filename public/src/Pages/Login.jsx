import React, { useState, useEffect } from "react";
import "./Login.css";
import Navbar from "../pcomponents/Navbar";
import Footer from "../pcomponents/Footer";
import logo from "./logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Stack, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import AuthSocial from "./AuthSocial";
import { Link as RouterLink } from "react-router-dom";
// import axios from "axios";
// import { loginRoute } from "../utils/APIRoutes";

function Login() {
  // const navigate = useNavigate();

  // const [values, setValues] = useState({
  //   username: "",
  //   password: "",
  // });

  // const toastOptions = {
  //   position: "bottom-right",
  //   autoClose: 8000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme: "dark",
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     const { username, password } = values;
  //     const { data } = await axios.post(loginRoute, {
  //       username,
  //       password,
  //     });
  //     if (data.status === false) {
  //       toast.error(data.msg, toastOptions);
  //     }
  //     if (data.status === true) {
  //       localStorage.setItem("anonlearn-user", JSON.stringify(data.user));
  //       navigate("/dashboard");
  //     }
  //   }
  // };

  // const validateForm = () => {
  //   const { password, username } = values;
  //   if (password === "" && username === "") {
  //     toast.error("Credentials are Required", toastOptions);
  //     return false;
  //   } else if (username === "") {
  //     toast.error("Username is Required ", toastOptions);
  //     return false;
  //   } else if (password === "") {
  //     toast.error("Password is Required for your safty", toastOptions);
  //     return false;
  //   }

  //   return true;
  // };

  // const handleChange = (event) => {
  //   setValues({ ...values, [event.target.name]: event.target.value });
  // };

  return (
    <div className="page-container">
      <div className="backimg">
        <Navbar />
        <>
          <div className="logininfo">
            <div className="structure">
              <Container sx={{ mt: 2, mb: 2 }} maxWidth="sm">
                <Stack spacing={5}>
                  <Stack
                    sx={{ width: "100%" }}
                    direction="row"
                    alignItems="center"
                  >
                    <img
                      style={{ height: 80, width: 80 }}
                      src={logo}
                      alt="logo"
                    />
                    <Typography variant="h4" color={"white"}>
                      AnonLearn
                    </Typography>
                  </Stack>
                </Stack>
                {/* login form */}
                <Stack
                  spacing={1}
                  sx={{ position: "relative" }}
                  marginTop={2}
                  marginBottom={2}
                >
                  <Typography variant="h7" color={"white"}>
                    Login to AnonLearn
                  </Typography>

                  <Stack direction="row" spacing={0.5}>
                    <Typography variant="body2" color={"white"}>
                      New user?
                    </Typography>

                    <Link
                      to={"/auth/register"}
                      component={RouterLink}
                      variant="subtitle2"
                    >
                      Create an account
                    </Link>
                  </Stack>
                </Stack>
                {/* Form */}
                <LoginForm />

                {/* <AuthSocial /> */}
              </Container>
            </div>
          </div>
        </>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
