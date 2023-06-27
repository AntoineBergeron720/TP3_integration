'use client'

import { Categories } from "@/types/modules";
import { Products } from "@/types/modules";
import { getData } from "../common/jeuxApi";



export default async function ProductPage() {
  const productsData = await getData('https://api-tp3-integration.onrender.com/products')
  const categoriesData = await getData('https://api-tp3-integration.onrender.com/categories')

 // for each categoryId in Products, find a matching string in Categories and return the name

 for (let i = 0; i < productsData.products.length; i++) {
    for (let j = 0; j < categoriesData.categories.length; j++) {
      if (productsData.products[i].categoryId == categoriesData.categories[j]._id) {
        productsData.products[i].categoryId = categoriesData.categories[j].name
      } 
    }
  }

  return (
    <ul>
        {productsData.products.map((product: Products) => (<li>{product.title} : {product.categoryId}</li>))}
    </ul>
  );
}