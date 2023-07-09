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

  // Étape 1 : prendre le id * utiliser router
  const params = useParams()

  // Étape 2 : Utiliser requête api getProductById pour obtenir le produit avec id (étape 1)
  const [product, setProduct] = useState<Products>();
  
  useEffect(() => {
    getProductById(params.product).then((data) => {
      setProduct(data.product);
    }).catch(() => {
      toast.error("Produit introuvable, veuiller réessayer plus tard.");
    })
  }, [] )
  

  // Étape 3 : Passer au props (titre, description, prix...) les valeurs du produit obtenu
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
          <MyFormUpdateProduct titre={product.title} description={product.description} prix={product.price} category={product.categoryId} />
        }
          </Box>
    </Container>
  );
}
