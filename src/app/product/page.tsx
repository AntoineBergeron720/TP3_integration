"use client";

import MyProductTable from "@/components/molecules/myProductTable/myProductTable";
import { Box } from "@mui/material";
import { Category } from "@/types/modules";
import { Product } from "@/types/modules";
import { getData } from "../common/jeuxApi";
import { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import toast from "react-hot-toast";
import { deleteProduct, getCategories, getProducts } from "@/utils/api";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    setLoading(true);
    getCategories().then((data)=> {
      setCategories(data.categories);
    }).then(()=> {
      getProducts().then((data)=> {
        setProducts(data.products);
        setLoading(false);
      })
    }).catch((err)=> {
      setLoading(false);
      toast.error("Erreur lors du chargement des produits");
    });
    
  }, []);


  return (
    <Box sx={{ padding: "10px" }}>
      <MyPageTitle title="Liste des produits" />

      <MyProductTable loading={loading} products={products} categories={categories} setProducts={setProducts} deleteProductCallBack={deleteProduct} />
      
    </Box>
  );
}
