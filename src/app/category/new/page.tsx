"use client";

import React from 'react';
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from '@/components/molecules/form/my-form-category';
import { Box } from '@mui/material';

export default function AddCategory() {
    return (
      <Box sx={{ backgroundColor: "white" }}>
        <MyPageTitle title="Ajouter une catégorie"/>
        <MyFormCategory name="test" />
      </Box>
    );
  }
