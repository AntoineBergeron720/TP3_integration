"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from "next/navigation";
import { Categories, Products } from "@/types/modules";

interface MyProductTableProps {
  products: Products[];
  categories: Categories[];
}

export default function MyProductTable(props: MyProductTableProps) {
  const columns = [
    { field: "title", headerName: "Produit" },
    { field: "description", headerName: "Description"},
    { field: "categoryId", headerName: "Catégorie" },
    { field: "price", headerName: "Prix ($)" },
  ];

  const router = useRouter();

  props.products.forEach(product => {
    props.categories.forEach(category => {
      if (product.categoryId == category._id) {
        product.categoryId = category.name;
      }
    });
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field} align="left">
                <Typography sx={{ fontSize: "1.75em", color: "primary.main" }}>
                  {column.headerName}
                </Typography>
              </TableCell>
            ))}
            <TableCell sx={{ paddingX: "0px" }} align="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => router.push("/product/new")}
              >
                <Typography sx={{ display: "flex", alignContent: "center", fontSize:"1em" }}>
                  Ajouter un produit
                  <AddBoxIcon
                    sx={{
                      borderRadius: "5px",
                      marginLeft: "5px"
                    }}
                  />
                </Typography>
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.length > 0
            ? props.products.map((product: Products) => (
                <TableRow key={product._id}>
                  {columns.map((column) => (
                    <TableCell key={column.field} align="left" onClick={() => router.push("/product/" + product._id)} sx={{ cursor: "pointer" }}>
                      <Typography sx={{ fontSize: "1.25em" }}>
                        {product.hasOwnProperty(column.field) ? column.field == "price" ? product[column.field] / 100 : product[column.field] : null}
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <Button
                      sx={{ color: "black" }}
                      action={null} // change to the function that gonna delete the product
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography sx={{ fontSize: "1.5em", color: "black" }}>
                    Aucun produit
                  </Typography>
                </TableCell>
              </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
