import {
  Autocomplete,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import RHFTextField from "../hook-form/RHFTextField";
import RHFAutocomplete from "../hook-form/RHFAutocomplete";
import FormProvider from "../Group/FormProvider";

//TODO =>Create reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TAGS_OPTION = [
  "BScIT",
  "BMS",
  "MSC",
  "Foregin Language",
  "Norwegian Language ",
  "BMM",
  "BA",
  "LLB",
  "MBBS",
];

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    groups: Yup.string().required("Select the group"),
  });

  const defaultValues = {
    groups: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //  API Call
      console.log("DATA", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {/* <RHFTextField name="title" label="Title" /> */}

        <RHFAutocomplete
          name="groups"
          label="Groups"
          freeSolo
          options={TAGS_OPTION.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />

        <Stack
          spacing={2}
          direction={"row"}
          alignItems="center"
          justifyContent={"end"}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Join
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 2 }}
    >
      {/* Title */}
      <DialogTitle sx={{ mb: 0 }}>Join a Group</DialogTitle>

      {/* Contact */}
      <DialogContent sx={{ color: "white", backgroundColor: "white" }}>
        {/* form */}

        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
