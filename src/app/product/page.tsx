"use client";

import MyProductTable from "@/components/molecules/myProductArray/myProductTable";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface Product {
  name: string;
  category: string;
  price: number;
}

export default function CategoryPage() {
  const [myProductArray, setMyProductArray] = useState<Product[]>();

  return (
    <Box sx={{ padding: "5%" }}>
      { /* page title component */ }

      { /* change "null" to the api products */}
      <MyProductTable myProductArray={null}/>
    </Box>
  );
}