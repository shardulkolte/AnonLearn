import React, { useState, useEffect } from "react";
import "./Register.css";
import Navbar from "../pcomponents/Navbar";
import Footer from "../pcomponents/Footer";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import { Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="backimg">
        <Navbar />
        <>
          <div className="info">
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
                  <Typography variant="body1" color={"white"}>
                    Register to AnonLearn
                  </Typography>

                  <Stack direction="row" spacing={0.5}>
                    <Typography variant="body2" color={"white"}>
                      Already have an account?
                    </Typography>

                    <Link
                      to={"/auth/login"}
                      component={RouterLink}
                      variant="subtitle2"
                    >
                      Login
                    </Link>
                  </Stack>
                </Stack>
                {/* Form */}
                <RegisterForm />

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

export default Register;
