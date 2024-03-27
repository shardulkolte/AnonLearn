import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";

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

const Messageself = ({ id, img, name, msg, time, unread, online, props }) => {
  const dispatch = useDispatch();
  // var props2 = {
  //   name: "You",
  //   message: "This is a sample message so just be with it ",
  //   timeStamp: "11.12am",
  // };
  return (
    <Stack direction={"row"} justifyContent={"end"} spacing={1} p={1}>
      <Box
        p={1}
        sx={{
          backgroundColor: "#404040", //: "#404040",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={0.1}>
          {/* <Typography variant="subtitle2" color={"white"}>
            {props.content}
          </Typography> */}
          <Typography
            variant="subtitle2"
            color="white"
            sx={{ wordWrap: "break-word" }}
          >
            {props.content}
          </Typography>
        </Stack>
        {/* <Stack spacing={0.1} alignItems={"end"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {props2.timeStamp}
          </Typography>
        </Stack> */}
      </Box>
    </Stack>
  );
};

export default Messageself;
