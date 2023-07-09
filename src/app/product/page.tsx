"use client";

import MyProductTable from "@/components/molecules/myProductArray/myProductTable";
import { Box } from "@mui/material";
import { Categories } from "@/types/modules";
import { Products } from "@/types/modules";
import { getProducts, getCategories } from "@/utils/api";
import { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";

export default function ProductPage() {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    if (products.length > 0) return;
    setLoading(true);
    getCategories().then((data)=> {
      setCategories(data.categories);
    }).then(()=> {
      getProducts().then((data)=> {
        setProducts(data.products);
        setLoading(false);
      })
    }).catch((err)=> console.log(err));
    
  }, [products, categories]);


  return (
    <Box sx={{ padding: "10px" }}>
      <MyPageTitle title="Liste des produits" />
      

      <MyProductTable loading={loading} myProductArray={products} categories={categories} />
      
    </Box>
  );
}
