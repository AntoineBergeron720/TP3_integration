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
  Box,
  CircularProgress
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from "next/navigation";
import { Category, Product } from "@/types/modules";
import { Section } from "../section/section";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { MyConfirmModal } from "@/components/molecules/myConfirmModal/myConfirmModal"

interface MyProductTableProps {
  loading?: boolean;
  products: Product[];
  categories: Category[];
  setProducts: (products: Product[]) => void;
  deleteProductCallBack: (id: string) => void;
}

export default function MyProductTable(props: MyProductTableProps) {
  const columns = [
    { field: "title", headerName: "Produit" },
    { field: "description", headerName: "Description"},
    { field: "categoryId", headerName: "Catégorie" },
    { field: "price", headerName: "Prix ($)" },
  ];

  const router = useRouter();

  const [show, setShow] = useState(false);

  const [selectedData, setSelectedData] = useState<Product | null>();
  
  const handleDelete = useCallback(() => {
    if(selectedData){

      props.deleteProductCallBack(selectedData._id)

      props.setProducts( 
        props.products.filter(
          (prod) => {
              return prod._id != selectedData._id
            }
          
        )
      );

      toast.success("Produit supprimé");
   }

    setShow(false);
  }, [props, selectedData])

  const handleCancel = useCallback(() => {
    setShow(false);
    setSelectedData(null)
  }, [])

  props.products.forEach(product => {
    props.categories.forEach(category => {
      if (product.categoryId == category._id) {
        product.categoryId = category.name;
      }
    });
  });

  return (
    <Section >
      <TableContainer style={{marginBottom: '100px'}}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} align="left">
                  <Typography sx={{ fontSize: "1.75em", color: "primary.main", whiteSpace: 'nowrap' }}>
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
                    Ajouter
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
            ? props.products.map((product: Product) => (
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
                        onClick={() => {
                          setShow(true);
                          setSelectedData(product);
                        }}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : <TableRow>
                  <TableCell colSpan={5} align="center">
                    {
                      !props.loading && 
                      <Typography sx={{ fontSize: "1.5em", color: "black" }}>
                        Aucun produit
                      </Typography>
                    }
                    
                    {
                      props.loading && props.loading == true && 
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                      </Box>
                    }
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <MyConfirmModal show={show} setShow={setShow} title="Attention !" message="Êtes-vous certain(e) de vouloir supprimer ce produit?" onCancel={handleCancel} onDelete={handleDelete} />
    </Section>
  );
}
