"use client";

import MyProductTable from "@/components/molecules/myProductArray/myProductTable";
import { Box } from "@mui/material";
import { getData } from "../../common/jeuxApi";
import { Category } from "@mui/icons-material";
import { useState } from "react";
import { Categories } from "@/types/modules";



export default async function CategoryPage() {
  const data = await getData('https://api-tp3-integration.onrender.com/categories')
  const total = data.categories.length;
  return (
    <Box>
      
    </Box>
  );
}
