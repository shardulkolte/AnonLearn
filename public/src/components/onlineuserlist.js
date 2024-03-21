import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";
import { motion } from "framer-motion";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const truncateText = (string, n) => {
  return string?.length > n ? `${string?.slice(0, n)}...` : string;
};

const Onlineuserlist = ({
  id,
  img,
  name,
  msg,
  time,
  unread,
  online,
  props,
}) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      onClick={() => {
        dispatch(SelectConversation({ room_id: id }));
      }}
      whileHover={{ scale: 1.01 }} // Scale effect on hover
      whileTap={{ scale: 0.97 }} // Scale effect on click
    >
      <Box
        sx={{
          width: "95%",
          height: 60,
          borderRadius: 1,
          backgroundColor: "#404040",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#555555",
          },
          marginLeft: "10px", // Adjust the margin-left to move the box towards the right
        }}
        p={1.2}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar>{props.name[0]}</Avatar>
              </StyledBadge>
            ) : (
              <Avatar>{props.name[0]}</Avatar>
            )}
            <Stack spacing={0.3}>
              <Typography color="white" variant="subtitle2">
                {props.name}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default Onlineuserlist;
