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

interface MyProductTableProps {
  myProductArray: any; // Change to the api category type
}

export default function MyProductTable(props: MyProductTableProps) {
  const columns = [
    { field: "name", headerName: "Produit" },
    { field: "category", headerName: "Categorie" },
    { field: "price", headerName: "Prix ($)" },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ display: "flex", alignItems: "flex-start", alignSelf: "stretch" }}>
            {columns.map((column) => (
              <TableCell key={column.field} sx={{ display: "flex", padding: "0px 10px", alignItems: "center", flex: "1 0 0", alignSelf: "stretch" }}>
                <Typography sx={{ fontSize: "34px", color: "primary.main" }}>
                  {column.headerName}
                </Typography>
              </TableCell>
            ))}
            {/* <TableCell sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: "1 0 0", alignSelf: "stretch" }}> */}
            <TableCell sx={{ display: "flex", padding: "8px 22px", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: "1 0 0", alignSelf: "stretch" }}>
              <Button
                variant="contained"
                color="primary"
                href="/categories/new"
              >
                <Typography sx={{ display: "flex", alignContent: "center" }}>
                  Ajouter un produit{" "}
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
            ? props.myProductArray.map((product) => (
                <TableRow key={product.id} sx={{ display: "flex", alignItems: "center", alignSelf: "stretch" }}>
                  {columns.map((column) => (
                    <TableCell key={column.field}>
                      {/* <Typography sx={{ fontSize: "24px", lineHeight: "30px", letter-spacing: 0.5px; }}> */}
                      <Typography sx={{ fontSize: "24px"}}>
                        {product[column.field]}
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                    {/* <Button
                      variant="contained"
                      color="primary"
                      action={null} // to change for the function that gonna delete
                    > */}
                      <DeleteForeverIcon />
                    {/* </Button> */}
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
