"use client";

import React, { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import {MyFormEditCategory} from "@/components/molecules/myFormCategory/myFormCategory";
import { Box, Container } from "@mui/material";
import { Categories } from "@/types/modules";
import { getCategoryById } from "@/utils/api";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface EditCategoryPageProps{
  params: {
    category: string;
  }
}

export default function EditCategory({params}: EditCategoryPageProps) {
  const t = useTranslations("categories");

  const [categoryData, setCategoryData] = useState<Categories>();

  useEffect(() => {
    if (!categoryData) {
      fetchCategory();
    }
  }, [categoryData]);

  function fetchCategory() {
    getCategoryById(params.category)
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
          <MyPageTitle title={t("edit-category")} />
        </Box>
        <Box>
          {categoryData ? (
            <Box>
              <MyFormEditCategory name={categoryData.name} categoryId={params.category} />
            </Box>
          ) : (
            <Typography> {t("found-category")}</Typography>
          )}
        </Box>
      </Container>
    </>
  );
}
