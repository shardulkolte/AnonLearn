import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProvider from "../Profile/FormProvider";
import { Button, Stack } from "@mui/material";
import RHFTextField from "./RHFTextField";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const { user } = useSelector((state) => state.app);

  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatar: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
    //   avatar: `https://${S3_BUCKET_NAME}.s3.${AWS_S3_REGION}.amazonaws.com/${user?.avatar}`,
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const onSubmit = async (data) => {
    try {
      // Submit data to backend
      console.log("DATA", data);
      // dispatch(
      //   UpdateUserProfile({
      //     name: data?.name,
      //     about: data?.about,
      //     avatar: file,
      //   })
      // );
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      setFile(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatar", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {/* <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} /> */}

        <RHFTextField
          // helperText={"This name is visible to your contacts"}
          name="name"
          label="Name"
        />
        <RHFTextField multiline rows={3} name="about" label="About" />

        <Stack direction={"row"} justifyContent="end">
          <Button
            sx={{ backgroundColor: "white" }}
            size="large"
            type="submit"
            variant="outlined"
          >
            Save
          </Button>
          {/* <LoadingButt
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              // loading={isSubmitSuccessful || isSubmitting}
            >
              Save
            </LoadingButton> */}
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
