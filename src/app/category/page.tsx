"use client";

import { Box } from "@mui/material";
import { getData } from "../common/jeuxApi";
import { useEffect, useState } from "react";
import { Categories } from "@/types/modules";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyCategoryTable from "@/components/molecules/myCategoryArray/myCategoryArray";



export default async function CategoryPage() {
  const [categories, setCategories] = useState<Categories[]>([]);
  //const data = await getData('https://api-tp3-integration.onrender.com/categories');

  useEffect(() => {
    getCategories();
  }, [categories]);

  function getCategories() {
    getData('https://api-tp3-integration.onrender.com/categories')
      .then(data => {
        setCategories(data.categories);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Box>
      <MyPageTitle title="Catégories" />

      <MyCategoryTable categories={categories} />
    </Box>
  );
}
