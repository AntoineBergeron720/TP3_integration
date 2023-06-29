"use client";

import MyProductTable from "@/components/molecules/myProductArray/myProductTable";
import { Box } from "@mui/material";
import { Categories } from "@/types/modules";
import { Products } from "@/types/modules";
import { getData } from "../common/jeuxApi";
import { useEffect, useState } from "react";

export default async function ProductPage() {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /*const productsData = await getData(
    "https://api-tp3-integration.onrender.com/products"
  );
  const categoriesData = await getData(
    "https://api-tp3-integration.onrender.com/categories"
  );
  for (let i = 0; i < productsData.products.length; i++) {
    for (let j = 0; j < categoriesData.categories.length; j++) {
      if (
        productsData.products[i].categoryId == categoriesData.categories[j]._id
      ) {
        productsData.products[i].categoryId = categoriesData.categories[j].name;
      }
    }
  }*/

  // With this loop, we can now display the name of the category instead of the id

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
      })
      .finally(() => setIsLoading(false));
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
    <Box sx={{ padding: "5%" }}>
      {/* page title component */}

      {/* {products.length > 0 ? (
        <MyProductTable myProductArray={products} />
      ) : (
        <MyProductTable myProductArray={[]} />
      )} */}
      <MyProductTable myProductArray={products} />
    </Box>
  );
}
