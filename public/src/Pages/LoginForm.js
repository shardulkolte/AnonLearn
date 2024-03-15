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
import { LoginUser } from "../redux/slices/auth";
import { useDispatch } from "react-redux";
// import { dispatch } from "../redux/store";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "anonlearn@gmail.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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
      dispatch(LoginUser(data));
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

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link
          component={RouterLink}
          to="/auth/reset-password"
          variant="body2"
          color="inherit"
          underline="always"
        >
          Forgot password?
        </Link>
      </Stack>

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
        Login
      </Button>

      {/* <Stack spacing={2}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>
      <input
        type="email"
        placeholder="Email"
        name="email"
        // onChange={(e) => handleChange(e)}
        min="3"
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        // onChange={(e) => handleChange(e)}
      />
      <Stack alignItems="flex-end" sx={{ my: 1 }}>
        <Link
          component={RouterLink}
          to="/auth/reset-password"
          variant="body2"
          color="inherit"
          underline="always"
        >
          Forgot password?
        </Link>
      </Stack>

      <button type="submit">Login</button> */}
    </FormProvider>
  );
};

export default LoginForm;
