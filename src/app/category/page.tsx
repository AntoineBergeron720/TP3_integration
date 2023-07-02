"use client";

import { Box, Container, Typography } from "@mui/material";
import { getData } from "../common/jeuxApi";
import { useEffect, useState } from "react";
import { Categories } from "@/types/modules";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import MyCategoryTable from "@/components/molecules/myCategoryTable/myCategoryTable";

export default async function CategoryPage() {
  const [categories, setCategories] = useState<Categories[]>([]);
  //const data = await getData('https://api-tp3-integration.onrender.com/categories');

  useEffect(() => {
    if (categories.length == 0) {
      getCategories();
    }
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

  return (
    <Container>
      <MyPageTitle title="Catégories" />

      {categories.length > 0 ? (
        <Box>
          {categories.map((category: Categories) => (
            <Typography key={category._id} sx={{ color: "black" }}>
              {category.name}
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography sx={{ color: "black" }}>Aucune catégorie</Typography>
      )}
      {/* <MyCategoryTable categories={categories} /> */}
    </Container>
  );
}
