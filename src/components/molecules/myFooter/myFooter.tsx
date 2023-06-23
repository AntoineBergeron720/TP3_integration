'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function MyFooter() {
  return (
    <footer>
      <AppBar position="static" style={{ backgroundColor: "bleu", color: "white" }}>
        <Toolbar>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height:'80px' }}>
          © CÉGEP GARNEAU - 2023
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default MyFooter;
