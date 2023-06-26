import MyProductArray from "@/components/molecules/myProductArray/myProductArray";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface Category {
  name: string;
}

export default function CategoryPage() {
  const [myProductArray, setMyProductArray] = useState<Category[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api-tp3-integration.onrender.com/categories");
      const data = await response.json();
      setMyProductArray(data);
    };
    fetchData();
  }, [myProductArray]);

  return (
    <Box>
      <MyProductArray myProductArray={[]} />
    </Box>
  );
}