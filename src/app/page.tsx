"use client";

import React from 'react';
import { Box } from '@mui/material';
import MyFormCategory from '../components/molecules/form/my-form-category';


export default function Home() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <MyFormCategory name="test" />
    </Box>
  );
}