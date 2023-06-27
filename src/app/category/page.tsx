"use client";

import MyProductTable from "@/components/molecules/myProductArray/myProductTable";
import { Box } from "@mui/material";

export default function CategoryPage() {
  return (
    <Box sx={{ padding: "5%" }}>
      <MyProductTable
        myProductArray={[
          {
            id: 1,
            name: "Coca-Cola",
            category: "Boissons",
            price: 1.5,
          },
          {
            id: 2,
            name: "Pepsi",
            category: "Boissons",
            price: 1.5,
          },
          {
            id: 3,
            name: "7up",
            category: "Boissons",
            price: 1.5,
          },
        ]}
      />
    </Box>
  );
}
