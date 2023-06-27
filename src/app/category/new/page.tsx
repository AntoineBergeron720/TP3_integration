"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/form/my-form-category";
import { Box, Container } from "@mui/material";

export default function AddCategory() {
  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "white",
        flexDirection: "column",
        minWidth: 300,
        mt: 2,
      }}
      fixed
      maxWidth="sm"
    >
      <Box sx={{ mb: 10 }}>
        <MyPageTitle title="Ajouter une catégorie" />
      </Box>
      <Box>
        <MyFormCategory name="test" />
      </Box>
    </Container>
  );
}
