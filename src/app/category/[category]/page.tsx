"use client";

import React, { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/form/my-form-category";
import { Box, Container } from "@mui/material";

export default function EditCategory() {
  const [categoryData, setCategoryData] = useState<Category>();

  useEffect(() => {
    if (!categoryData) {
      fetchCategory();
    }
  }, [categoryData]);

  function fetchCategory() {
    getData(
      "https://api-tp3-integration.onrender.com/categories/637bc5cc85b7540a4240605c"
    )
      .then((category: Category) => {
        console.log(category);
        setCategoryData(category);
      })
      .catch((err) => {
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
            <MyFormCategory categoryName={categoryData.category.name} categoryId={categoryData.category._id} />
          </Box>
        ) : (
          <Typography> No category found.</Typography>
        )}
      </Box>
    </Container>
  );
}
