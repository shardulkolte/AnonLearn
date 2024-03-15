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
import { CaretLeft } from "phosphor-react";
import ResetPasswordForm from "./ResetPasswordForm";
// import axios from "axios";
// import { loginRoute } from "../utils/APIRoutes";

function ResetPassword() {
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
                <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                  <Typography variant="h4" paragraph color={"white"}>
                    Forgot your password?
                  </Typography>

                  <Typography sx={{ color: "white", mb: 5 }}>
                    Please enter the email address associated with your account
                    and We will email you a link to reset your password.
                  </Typography>
                </Stack>

                {/* Reset Password Form */}
                <ResetPasswordForm />

                <Link
                  component={RouterLink}
                  to={"/auth/login"}
                  color="inherit"
                  variant="subtitle2"
                  sx={{
                    mt: 3,
                    mx: "auto",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <CaretLeft size={24} />
                  Return to login
                </Link>
                {/* Form */}
              </Container>
            </div>
          </div>
        </>
      </div>

      <Footer />
    </div>
  );
}

export default ResetPassword;
