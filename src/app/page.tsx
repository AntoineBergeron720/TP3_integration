"use client";

import MyForm from "@/components/molecules/form/my-form";
import React from 'react';
import { Box } from '@mui/material';


export default function Home() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <MyForm />
    </Box>
  );
}