import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { createCategory, getCategoryById, updateCategory } from "@/utils/api";
import { putData } from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Categories } from "@/types/modules";
import toast from "react-hot-toast";

const schema = yup
  .object({
    name: yup.string().max(50).required(),
  })
  .required();
//type FormData = yup.InferType<typeof schema>;

interface MyFormCategoryProps {
  name: string;
}

export function MyFormCategory(props: MyFormCategoryProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<MyFormCategoryProps>({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState("");
  const categoryNameRef = useRef(null);

  //useEffect(() => {
  //  if (!categoryData) {

  //  }
  //}, [categoryData]);

  function onSubmit(data: MyFormCategoryProps) {
    createCategory(data)
      .then((result) => {
        setMessage("");
        toast.success("La catégorie a été ajoutée avec succès !");
        if (categoryNameRef && categoryNameRef.current) {
          reset();
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error");
      });
  }

  function clearMessage() {
    setMessage("");
  }

  function handleCancel() {
    reset(); // Clear the form values
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Category Name"
              variant="outlined"
              fullWidth
              {...register("name")}
              inputProps={{ ref: categoryNameRef }}
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              onClick={clearMessage}
            />
            {message && (
              <Box
                mt={2}
                p={2}
                borderRadius={2}
                bgcolor={
                  message === "Error"
                    ? "#FF0000"
                    : message === "Success"
                    ? "#32CD32"
                    : "#32CD32"
                }
                color="black"
                mb={2}
              >
                <Typography variant="body1">{message}</Typography>
              </Box>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Button
              type="button"
              variant="outlined"
              sx={{ border: "2px solid #007FFF" }}
              disabled={!isValid}
              onClick={handleCancel}
            >
              Annuler
            </Button>

            <Button
              variant="contained"
              //onClick={() => router.push('/category')}
              sx={{ border: "2px solid #007FFF" }}
              type="submit"
              disabled={!isValid}
            >
              Enregistrer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

interface EditCategoryPageProps {
  categoryId: string;
}

export function MyFormEditCategory(props: EditCategoryPageProps) {
  const [categoryData, setCategoryData] = useState<Categories>();
  const [initialName, setInitialName] = useState<string | undefined>("");

  useEffect(() => {
    if (!categoryData) {
      fetchCategory();
    }
  }, [categoryData]);

  function fetchCategory() {
    getCategoryById(props.categoryId)
      .then((category: Categories) => {
        console.log(category);
        setCategoryData(category);
        setInitialName(category.name);
        setValue("name", category.name);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    reset,
    setValue,
  } = useForm<MyFormCategoryProps>({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState("");
  const categoryNameRef = useRef(null);

  function onSubmit(data: MyFormCategoryProps) {
    updateCategory(data, props.categoryId)
      .then((result) => {
        toast.success("La catégorie à été modifiée avec succès!");
        reset();
      })
      .catch((error) => {
        setMessage("Il y a une erreur.");
      });
  }

  useEffect(() => {
    if (categoryData && categoryData.category) {
      setValue("name", categoryData.category.name);
    }
  }, [categoryData, setValue]);

  function clearMessage() {
    setMessage("");
  }

  function handleCancel() {
    reset();
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
            <TextField
              label="Category Name"
              id="name"
              variant="outlined"
              fullWidth
              {...register("name")}
              inputProps={{ ref: categoryNameRef }}
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              onClick={clearMessage}
            />
            {message && (
              <Box
                mt={2}
                p={2}
                borderRadius={2}
                bgcolor={
                  message === "Error"
                    ? "#FF0000"
                    : message === "Success"
                    ? "#32CD32"
                    : "#32CD32"
                }
                color="black"
                mb={2}
              >
                <Typography variant="body1">{message}</Typography>
              </Box>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Button
              type="button"
              variant="outlined"
              sx={{ border: "2px solid #007FFF" }}
              disabled={!isValid}
              onClick={handleCancel}
            >
              Annuler
            </Button>

            <Button
              variant="contained"
              //onClick={() =>
              sx={{ border: "2px solid #007FFF" }}
              type="submit"
              disabled={!isValid || watch("name") === initialName}
            >
              Enregistrer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
