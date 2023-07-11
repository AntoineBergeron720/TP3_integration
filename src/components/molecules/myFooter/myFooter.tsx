"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

function MyFooter() {
  return (
    <Box sx={{ position: "fixed", bottom: "0", width: "100%" }}>
      <AppBar position="static" sx={{ color: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75px",
            }}
          >
            © CÉGEP GARNEAU - 2023
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyFooter;
