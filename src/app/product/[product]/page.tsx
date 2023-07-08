"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import { MyFormUpdateProduct } from "@/components/molecules/my-form-product/my-form-product";
import { Box, Container } from "@mui/material";

export default function AddProduct() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
        mt: 2,
      }}
      fixed
      maxWidth="sm"
    >
      <Box sx={{ mb: 10 }}>
        <MyPageTitle title="Ajouter un produit" />
      </Box>
      <Box>
        <MyFormUpdateProduct name="test"/>
      </Box>
    </Container>
  );
}
