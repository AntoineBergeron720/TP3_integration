"use client";

import React from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import { MyFormCreateProduct } from "@/components/molecules/myFormProduct/myFormProduct";
import { Box, Container } from "@mui/material";
import { useTranslations } from "next-intl";

export default function AddProduct() {
  const t = useTranslations("products");

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
        <MyPageTitle title={t("add-product")} />
      </Box>
      <Box>
        <MyFormCreateProduct />
      </Box>
    </Container>
  );
}