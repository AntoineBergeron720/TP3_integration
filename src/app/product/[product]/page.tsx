"use client";

import React, { useState, useEffect } from "react";
import MyPageTitle from "@/components/molecules/title/my-page-title";
import { MyFormUpdateProduct } from "@/components/molecules/myFormProduct/myFormProduct";
import { Box, Container } from "@mui/material";
import { useParams } from 'next/navigation'
import { getProductById } from "@/utils/api";
import toast from "react-hot-toast";
import { Products } from "@/types/modules";

export default function AddProduct() {


  const params = useParams()
  const [product, setProduct] = useState<Products>();
  
  useEffect(() => {
    getProductById(params.product).then((data) => {
      setProduct(data.product);
    }).catch(() => {
      toast.error("Produit introuvable, veuiller réessayer plus tard.");
    })
  }, [] )
  

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
        mt: 2,
      }}
      fixed
      maxWidth="sm"
    >
      <Box sx={{ mb: 10 }}>
        <MyPageTitle title="Modifier un produit" />
      </Box>
      <Box>
        {
          product &&
          <MyFormUpdateProduct id={product._id} titre={product.title} description={product.description} prix={product.price} category={product.categoryId} />
        }
          </Box>
    </Container>
  );
}
