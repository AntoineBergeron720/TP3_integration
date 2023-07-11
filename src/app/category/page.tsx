"use client";

import { Box } from "@mui/material";
import { getCategories, deleteCategory } from "@/utils/api";
import { useEffect, useState } from "react";
import { Categories } from "@/types/modules";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import { MyCategoryTable } from "@/components/molecules/myCategoryTable/myCategoryTable";
import toast from "react-hot-toast";
 
export default function CategoryPage() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    setLoading(true);
    
    getCategories().then((data)=> {
      setCategories(data.categories);
      setLoading(false);
    })
    .catch(()=> {
      setLoading(false);
      toast.error("Erreur lors de la récupération des catégories");
    });
    
  }, []);

  return (
    <Box sx={{ padding: "10px" }}>
      <MyPageTitle title="Liste des catégories" />
      <MyCategoryTable loading={loading} categories={categories} setCategories={setCategories} deleteCategoryCallBack={deleteCategory}  />
    </Box>
  );

}