"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/myFormCategory/myFormCategory";
import { Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function AddCategory() {
//const { handleSave, handleSubmit, control } = useForm();


  return (
    <>
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
          <MyFormCategory name={""} />
        </Box>
      </Container>
    </>
  );
}