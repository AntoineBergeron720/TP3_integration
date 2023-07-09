"use client";

import React, { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/myFormCategory/myFormCategory";
import { Box, Container, Typography } from "@mui/material";
import { Category } from "@/types/modules";
import { getData } from "@/app/common/jeuxApi";

interface EditCategoryPageProps{
  params: {
    category: string;
  }
}

export default function EditCategory({params}: EditCategoryPageProps) {
  const [categoryData, setCategoryData] = useState<Category>();

  useEffect(() => {
    if (!categoryData) {
      fetchCategory();
    }
  }, [categoryData]);

  function fetchCategory() {
    getData(
      "https://api-tp3-integration.onrender.com/categories/" + params.category
    )
      .then((category: Category) => {
        console.log(category);
        setCategoryData(category);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

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
        <MyPageTitle title="Modifier une catégorie" />
      </Box>
      <Box>
        {categoryData ? (
          <Box>
            <MyFormCategory name={categoryData.name} categoryId={categoryData._id} />
          </Box>
        ) : (
          <Typography> No category found.</Typography>
        )}
      </Box>
    </Container>
  );
}
