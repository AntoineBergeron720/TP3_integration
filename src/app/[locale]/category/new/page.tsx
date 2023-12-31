"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import { MyFormCategory } from "@/components/molecules/myFormCategory/myFormCategory";
import { Box, Container } from "@mui/material";
import { useTranslations } from "next-intl";

export default function AddCategory() {
const t = useTranslations("categories");

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
          <MyPageTitle title={t("add-category")} />
        </Box>
        <Box>
          <MyFormCategory name={""} />
        </Box>
      </Container>
    </>
  );
}