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
import {
  Alert,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import AuthSocial from "./AuthSocial";
import { Link as RouterLink } from "react-router-dom";
import FormProvider from "../components/hook-form/FormProvider";
import RHFTextField from "../components/hook-form/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import { ForgotPassword } from "../redux/slices/auth";
import { useDispatch } from "react-redux";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const defaultValues = {
    email: "anonlearn@gmail.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      // submit data to backend
      dispatch(ForgotPassword(data));
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email address" />

        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          // loading={isLoading}
          sx={{
            bgcolor: "#4e0eff",
            color: "white",
            "&:hover": {
              bgcolor: "#4000ffb3",
              color: "white",
            },
          }}
        >
          Send Request
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ResetPasswordForm;
