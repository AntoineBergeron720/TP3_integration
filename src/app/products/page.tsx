"use client";

import { Categories } from "@/types/modules";
import { Products } from "@/types/modules";
import { getData } from "../common/jeuxApi";

export default async function ProductPage() {
  const productsData = await getData(
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
  }
  // With this loop, we can now display the name of the category instead of the id
  return (
    <ul>
      {productsData.products.map((product: Products) => (
        <li>
          {product.title} : {product.categoryId}
        </li>
      ))}
    </ul>
  );
}
