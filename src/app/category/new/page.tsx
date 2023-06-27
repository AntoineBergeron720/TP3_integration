"use client";

import React from 'react';
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from '@/components/molecules/form/my-form-category';
import { Box, Container, useMediaQuery } from '@mui/material';

export default function AddCategory() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "white",
        padding: isMobile ? "10px" : "20px",
        justifyContent: "center",
        flexDirection: "column"
      }}
      fixed
    >
      <Box>
        <MyPageTitle title="Ajouter une catégorie" />
      </Box>
      <Box sx={{ marginTop: isMobile ? "20px" : "40px", minWidth: 300, width: "70%" }}>
        <MyFormCategory name="test" />
      </Box>
    </Container>
  );
}

