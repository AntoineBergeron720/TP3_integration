"use client";

import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface MyProductTableProps {
  myProductArray: any; // Change to the api category type
}

export default function MyProductTable(props: MyProductTableProps) {
  const columns = [
    { field: 'name', headerName: 'Product Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130},
    { field: 'price', headerName: 'Price', width: 90 }
  ];
  const rows = props.myProductArray;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
