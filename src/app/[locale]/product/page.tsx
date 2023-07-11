"use client";

import {MyProductTable} from "@/components/molecules/myProductTable/myProductTable";
import { Box } from "@mui/material";
import { Categories } from "@/types/modules";
import { Products } from "@/types/modules";
import { getProducts, getCategories, deleteProduct } from "@/utils/api";
import { useEffect, useState } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export default function ProductPage() {
  const t = useTranslations("products");
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
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
      toast.error(t("loading-error"));
    });
    
  }, []);


  return (
    <Box sx={{ padding: "10px" }}>
      <MyPageTitle title={t("page-title")} />

      <MyProductTable loading={loading} products={products} categories={categories} setProducts={setProducts} deleteProductCallBack={deleteProduct} />
      
    </Box>
  );
}