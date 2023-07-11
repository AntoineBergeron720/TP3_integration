"use client";

import React, { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/myFormCategory/myFormCategory";
import { Box, Container } from "@mui/material";
import { Categories } from "@/types/modules";
import { getCategoryById } from "@/utils/api";
import { Typography } from "@mui/material";

interface EditCategoryPageProps{
  params: {
    category: string;
  }
}

export default function EditCategory({params}: EditCategoryPageProps) {
  const [categoryData, setCategoryData] = useState<Categories>();

  useEffect(() => {
    if (!categoryData) {
      fetchCategory();
    }
  }, [categoryData]);

  function fetchCategory() {
    getCategoryById(params.category) // TODO : useParams to get category id
    .then((data) => {
      console.log(data);
      setCategoryData(data.category);
    })
    .catch((err: any) => {
      console.log(err);
    });
  }

  return (<>
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
              <MyFormCategory name={categoryData.name}/>
            </Box>
          ) : (
            <Typography> No category found.</Typography>
          )}
        </Box>
      </Container>
    </>
  );
}