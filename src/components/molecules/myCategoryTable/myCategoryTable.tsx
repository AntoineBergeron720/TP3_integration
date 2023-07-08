"use client";

import { Categories } from "@/types/modules";
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
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useRouter } from "next/navigation";
import { Section } from "../section/section";

interface MyCategoryTableProps {
  categories: Categories[];
}

export default function MyCategoryTable(props: MyCategoryTableProps) {
  const columns = [{ field: "name", headerName: "Nom" }];

  const router = useRouter();

  return (
    <Section>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} align="left">
                  <Typography
                    sx={{ fontSize: "1.75em", color: "primary.main" }}
                  >
                    {column.headerName}
                  </Typography>
                </TableCell>
              ))}
              <TableCell sx={{ paddingX: "0px" }} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/category/new")}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      fontSize: "1em",
                    }}
                  >
                    Ajouter une catégorie
                    <AddBoxIcon
                      sx={{
                        borderRadius: "5px",
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.categories.length > 0 ? (
              props.categories.map((category: Categories) => (
                <TableRow key={category._id}>
                  <TableCell align="left">
                    <Typography sx={{ fontSize: "1.25em" }}>
                      {category.name}
                    </Typography>
                  </TableCell>
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
            ) : (
              <TableRow>
                <TableCell align="left">
                  <Typography sx={{ fontSize: "1.25em" }}>
                    Aucune catégorie
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
}
