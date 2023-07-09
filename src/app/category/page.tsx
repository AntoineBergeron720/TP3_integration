"use client";

import MyProductTable from "@/components/molecules/myProductArray/myProductTable";
import { Box } from "@mui/material";
import { getCategories } from "@/utils/api";
import { Category } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Categories } from "@/types/modules";

export default async function CategoryPage() {

  const [categories, setCategories] = useState<Categories[]>([])
  
  useEffect(() => {
    const data = getCategories()
    data.then((res) => {
      setCategories(res)
      console.log(res)
    })
    
  }, [categories])
  
  
  return (
    <Box>
      
    </Box>
  );
}
