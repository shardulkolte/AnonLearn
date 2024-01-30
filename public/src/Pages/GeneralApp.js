import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";




const GeneralApp = () => {

  const theme = useTheme();
  const [searchParams] = useSearchParams();



  return (
    <>
    {/* <div style={{ display: 'flex', margin: 0, padding: 0 }}>
      <Box sx={{
          height: "100vh",
          width: 90,

          backgroundColor:
            theme.palette.mode === "light"
              ? "#000000"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}>
        <h1></h1>
      </Box>
      </div> */}
    </>
  );
};

export default GeneralApp;