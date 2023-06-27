'use client';

import { Box } from "@mui/material";
import { getData } from "../common/jeuxApi";
import { Category } from "@mui/icons-material";
import { useState } from "react";
import { Categories } from "@/types/modules";



export default async function CategoryPage() {
  const data = await getData('https://api-tp3-integration.onrender.com/categories')
  const total = data.categories.length;
  return (

    <ul>
        {data.categories.map((category: Categories) => (<li>{category.name}</li>))}
    </ul>
  );
}