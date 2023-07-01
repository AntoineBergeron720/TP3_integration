"use client";

import { Categories } from "@/types/modules";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

interface MyCategoryTableProps {
  categories: Categories[];
}

export default function MyCategoryTable(props: MyCategoryTableProps) {
  const columns = [
    { field: "Name", headerName: "Nom" }
  ];

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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.categories.map((category) => (
            <TableRow key={category._id}>
              <TableCell align="left">
                <Typography sx={{ fontSize: "1.25em" }}>
                  {category.name}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}