import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";
import { faker } from "@faker-js/faker";

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

const MessageOthers = ({ id, img, name, msg, time, unread, online, props }) => {
  const dispatch = useDispatch();
  // var props1 = {
  //   name: "Random User",
  //   message: "This is a sample message so just be with it ",
  //   timeStamp: "11.12am",
  // };
  return (
    <Stack direction={"row"} justifyContent={"start"} spacing={1} p={1}>
      <Avatar src={faker.image.avatar()}></Avatar>
      <Box
        p={1}
        sx={{
          backgroundColor: "#6D6C6C", //: "#404040",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={0.1}>
          <Typography color={"black"} variant="subtitle2">
            {props.sender.username}
          </Typography>
          <Typography variant="subtitle2" color={"white"}>
            {props.content}
          </Typography>
        </Stack>
        {/* <Stack spacing={0.1} alignItems={"end"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {props1.timeStamp}
          </Typography>
        </Stack> */}
      </Box>
    </Stack>

    // <Box
    //   sx={{
    //     width: "30%",
    //     height: 60,
    //     borderRadius: 1,
    //     backgroundColor: "#404040",
    //   }}
    //   p={1.2}
    // >
    //   <Stack
    //     direction="row"
    //     alignItems={"center"}
    //     justifyContent="space-between"
    //   >
    //     <Stack direction="row" spacing={2}>
    //       <Avatar>{props1.name[0]}</Avatar>
    //       <Stack spacing={0.3}>
    //         <Typography color={"white"} variant="subtitle2">
    //           {props1.name}
    //         </Typography>
    //         <Typography variant="caption">{props1.message}</Typography>
    //       </Stack>
    //     </Stack>
    //     <Stack spacing={1} alignItems={"center"}>
    //       <Typography sx={{ fontWeight: 600 }} variant="caption">
    //         {props1.timeStamp}
    //       </Typography>
    //       <Badge
    //         className="unread-count"
    //         color="primary"
    //         badgeContent={unread}
    //       />
    //     </Stack>
    //   </Stack>
    // </Box>
  );
};

export default MessageOthers;
