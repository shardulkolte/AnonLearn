import React from 'react'
import { Box, Divider, Link, Stack, Typography,IconButton } from '@mui/material'
import { blue } from '@mui/material/colors';
import { DownloadSimple ,Image} from 'phosphor-react';

const DocMsg = ({ el}) => {
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? "#6D6C6C" : "#404040",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: "#949494",
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption" color={'black'}>Abstract.png</Typography>
            <IconButton>
              <DownloadSimple/>
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color={"#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};

const LinkMsg = ({ el}) => {

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? "#6D6C6C" : "#404040",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="start"
            sx={{
              backgroundColor: "#949494",
              borderRadius: 1,
            }}
          >
            <img
            src={el.preview}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
            <Stack direction={"column"} spacing={2}>
              {/* <Embed
                width="300px"
                isDark
                url={`https://youtu.be/xoWxBR34qLE`}
              /> */}
              <Typography 
              variant='subtitle2'
              sx={{color:"blue"}}
              component={Link}
              to="//https://www.youtube.com">www.youtube.com</Typography>
            </Stack>
            <Typography variant='body2' color={'black'}>{el.message}</Typography>
          </Stack>
          {/* <Typography
            variant="body2"
            color={"#fff"}
          >
            <div dangerouslySetInnerHTML={{ __html: el.message }}></div>
          </Typography> */}
        </Stack>
      </Box>
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};


const ReplyMsg = ({ el}) => {
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor: el.incoming ? "#6D6C6C" : "#404040",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={'black'}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={"#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};

const MediaMsg = ({ el}) => {
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        px={1.5}
        py={1.5}
        sx={{
          backgroundColor:el.incoming ? "#6D6C6C" : "#404040",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={'white'}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {/* {menu && <MessageOption />} */}
    </Stack>
  );
};


const TextMsg = ({el}) => {
  return (
    <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5}
      sx={{
        backgroundColor:el.incoming ? "#6D6C6C" : "#404040",
        borderRadius:1.5,
        width:"max-content"
        }}>
          <Typography variant='body2' color={'white'}>
            {el.message}
          </Typography>

      </Box>

    </Stack>
  )
}



const TimeLine = ({el}) => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Divider width="46%" sx={{
                borderTopWidth: 1, // Set the thickness of the line
                borderTopStyle: 'solid', // Use a solid line
                borderTopColor: 'black', // Set the color of the line
                fontWeight: 'bold', // Make the divider bold
                margin: '20px 0', // Add some margin for spacing
              }} />
              <Typography variant='caption' color={'black'}>{el.text}</Typography>
        <Divider width="46%" sx={{
                borderTopWidth: 1, // Set the thickness of the line
                borderTopStyle: 'solid', // Use a solid line
                borderTopColor: 'black', // Set the color of the line
                fontWeight: 'bold', // Make the divider bold
                margin: '20px 0', // Add some margin for spacing
              }} />


    </Stack>
  )
}

export {TimeLine,TextMsg,MediaMsg,ReplyMsg,LinkMsg,DocMsg}