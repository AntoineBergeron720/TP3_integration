"use client";

import MyProductTable from "@/components/molecules/myProductTable/myProductTable";
import { Box } from "@mui/material";
import { Categories } from "@/types/modules";
import { Products } from "@/types/modules";
import { getData } from "../../../common/jeuxApi";
import { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import { useTranslations } from "next-intl";

export default function ProductPage() {
  const t = useTranslations();
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    if (products.length > 0) return;
    getCategories();
  }, [products]);

  function getProducts() {
    getData("https://api-tp3-integration.onrender.com/products")
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getCategories() {
    getData("https://api-tp3-integration.onrender.com/categories")
      .then((data) => {
        setCategories(data.categories);
        getProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Box sx={{ padding: "10px" }}>
      <MyPageTitle title={t("products.page-title")} />

      <MyProductTable products={products} categories={categories} />
    </Box>
  );
}
