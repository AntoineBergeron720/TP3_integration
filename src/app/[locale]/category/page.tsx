"use client";

import { Box, Container, Typography } from "@mui/material";
import { deleteData, getData } from "../../../common/jeuxApi";
import { useEffect, useState } from "react";
import { Categories } from "@/types/modules";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyCategoryTable from "@/components/molecules/myCategoryTable/myCategoryTable";
import { useTranslations } from "next-intl";

export default function CategoryPage() {
  const t = useTranslations();
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    if (categories.length === 0) getCategories();
  }, [categories]);

  function getCategories() {
    getData("https://api-tp3-integration.onrender.com/categories")
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteCategory(id: string) {
    deleteData(`https://api-tp3-integration.onrender.com/categories/${id}`)
      .then(() => {
        getCategories();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <MyPageTitle title={t("categories.page-title")} />
      <MyCategoryTable
        categories={categories}
        deleteCategoryCallBack={deleteCategory}
      />
    </Container>
  );
}