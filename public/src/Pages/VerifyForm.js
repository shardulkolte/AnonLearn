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
import { LoginUser, VerifyEmail } from "../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import RHFCodes from "../components/hook-form/RHFCodes";
// import { dispatch } from "../redux/store";

const VerifyForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required("Code is required"),
    code2: Yup.string().required("Code is required"),
    code3: Yup.string().required("Code is required"),
    code4: Yup.string().required("Code is required"),
    code5: Yup.string().required("Code is required"),
    code6: Yup.string().required("Code is required"),
  });

  const defaultValues = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API Request
      dispatch(
        VerifyEmail({
          email,
          otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFCodes
          keyName="code"
          inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}
        />
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
          Verify
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default VerifyForm;
