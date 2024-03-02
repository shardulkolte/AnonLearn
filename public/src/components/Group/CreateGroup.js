import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'
import * as Yup from 'yup';
import {  useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import React from 'react'
import RHFTextField from '../hook-form/RHFTextField';
import RHFAutocomplete from '../hook-form/RHFAutocomplete';
import FormProvider from '../hook-form/FormProvider';
// import FormProvider from '../hook-form/FormProvider';


//TODO =>Create reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TAGS_OPTION = [
    "Toy Story 3",
    "Logan",
    "Full Metal Jacket",
    "Dangal",
    "The Sting",
    "2001: A Space Odyssey",
    "Singin' in the Rain",
    "Toy Story",
    "Bicycle Thieves",
    "The Kid",
    "Inglourious Basterds",
    "Snatch",
    "3 Idiots",
  ];

const CreateGroupForm = ({ handleClose }) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),

        members: Yup.array().min(2, "Must have at least 2 members"),
    });

    const defaultValues = {
        title: "",

        members: [],
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
          console.log("error",error);
        }
      };

      return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}  >
          <Stack spacing={3}>
            
            <RHFAutocomplete
              name="members"
              label="Members"
              multiple
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
                Create
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
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ p: 4 }}

        >
            {/* Title */}
            <DialogTitle>Join a Group</DialogTitle>

            {/* Contact */}
            <DialogContent>
                {/* form */}
                <CreateGroupForm />
            </DialogContent>
        </Dialog>
    )
}

export default CreateGroup