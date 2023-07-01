import { getData } from "@/app/common/jeuxApi";
import MyFormProduct from "@/components/molecules/myFormProduct/my-form-product";
import { Products } from "@/types/modules";
import { Box, Container } from "@mui/material";
import { useState } from "react";

interface ProductPageProps {
  productId: string;
}

export default function ProductPage(props: ProductPageProps) {
  const [product, setProduct] = useState({} as Products);

  useEffect(() => {

  }, [product]);

  function getProduct() {
    getData("products", props.productId).then((data) => {

  return (
    <Container>
      <MyFormProduct title={""} description={""} price={0} categoryId={""} categoriesId={[]}  />
    </Container>
  );
}