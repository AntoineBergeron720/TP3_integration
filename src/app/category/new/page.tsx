"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/my-form-category/my-form-category";
import { Box, Container } from "@mui/material";


export async function saveCategory(url: string, categoryData: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });

    if (!response.ok) {
      throw new Error("Failed to save category");
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message || "Failed to save category");
  }
}

export default function AddCategory() {
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
        <MyPageTitle title="Ajouter une catégorie" />
      </Box>
      <Box>
        <MyFormCategory name="" />
      </Box>
    </Container>
  );
}
