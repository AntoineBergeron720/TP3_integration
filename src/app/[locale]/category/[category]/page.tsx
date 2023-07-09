"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyFormCategory from "@/components/molecules/my-form-category/my-form-category";
import { Box, Container } from "@mui/material";
import { useTranslations } from "next-intl";

export default function EditCategory() {
  const t = useTranslations();

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
        <MyPageTitle title={t("categoryModified.page")} />
      </Box>
      <Box>
        <MyFormCategory name="test" />
      </Box>
    </Container>
  );
}