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

interface MyProductTableProps {
  myProductArray: any; // Change to the api category type
}

export default function MyProductTable(props: MyProductTableProps) {
  const columns = [
    { field: "name", headerName: "Produit" },
    { field: "category", headerName: "Catégorie" },
    { field: "price", headerName: "Prix ($)" },
  ];

  const router = useRouter();

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
          {props.myProductArray
          /* change to the api category type */
            ? props.myProductArray.map((product: any) => (
                <TableRow key={product.id}>
                  {columns.map((column) => (
                    <TableCell key={column.field} align="left" onClick={() => router.push("/product/" + product.id)} sx={{ cursor: "pointer" }}>
                      <Typography sx={{ fontSize: "1.25em"}}>
                        {product[column.field] / 100}
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <Button
                      sx={{ color: "black" }}
                      action={null} // to change for the function that gonna delete the product
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
