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
  Box,
  CircularProgress
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useRouter } from "next/navigation";
import { Section } from "../section/section";
import toast from "react-hot-toast";
import { MyConfirmModal } from "@/components/molecules/myConfirmModal/myConfirmModal"
import { useState, useCallback } from "react";

interface MyCategoryTableProps {
  loading?: boolean;
  categories: Categories[];
  setCategories: (categories: Categories[]) => void;
  deleteCategoryCallBack: (id: string) => void;
}

export function MyCategoryTable(props: MyCategoryTableProps) {
  const columns = [{ field: "name", headerName: "Nom" }];

  const router = useRouter();

  const [show, setShow] = useState(false);

  const [selectedData, setSelectedData] = useState<Categories | null>();
  
  const handleDelete = useCallback(() => {
    if(selectedData){

      props.deleteCategoryCallBack(selectedData._id)

      props.setCategories( 
        props.categories.filter(
          (cat) => {
            
              return cat._id != selectedData._id
            }
          
        )
      );

      toast.success("Catégorie supprimée");
   }

    setShow(false);
  }, [props, selectedData])

  const handleCancel = useCallback(() => {
    setShow(false);
    setSelectedData(null)
  }, [])


  return (
    <Section>
      <TableContainer style={{ marginBottom: '100px' }}>
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
            {props.categories && props.categories.length > 0 ? (
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
                      onClick={() => {
                        setShow(true)
                        setSelectedData(category)
                      }}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>

                </TableRow>

              ))
            ) : (

              <TableRow>
                <TableCell colSpan={5} align="center">
                  {
                    !props.loading &&

                    <Typography sx={{ fontSize: "1.25em" }}>
                      Aucune catégorie
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
            )}
          </TableBody>
        </Table>


      </TableContainer>

      <MyConfirmModal show={show} setShow={setShow} title="Attention !" message="Êtes-vous certain(e) de vouloir supprimer cette catégorie?" onCancel={handleCancel} onDelete={handleDelete} />

    </Section>
  );
}