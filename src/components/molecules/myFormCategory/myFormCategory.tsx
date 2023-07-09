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
import { getData, postData, putData } from "@/app/common/jeuxApi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Roboto } from "next/font/google";
import { Category } from "@/types/modules";
import { getCategories } from "@/utils/api";
import toast from "react-hot-toast";
import MyPageTitle from "../title/my-page-title";

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

  function onSubmit(data: MyFormCategoryProps) {
    postData("https://api-tp3-integration.onrender.com/categories/", data)
      .then((result) => {
        console.log(result);
        setMessage("La catégorie a été ajoutée avec succès !");
        reset();
      })
      .catch((error) => {
        console.error(error);
        setMessage("Il y a une erreur.");
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
  params: {
    category: string;
  };
}


export function EditCategory({ params }: EditCategoryPageProps) {
  const [categoryData, setCategoryData] = useState<Category>();

  useEffect(() => {
    if (!categoryData) {
      fetchCategory();
    }
  }, [categoryData]);

  function fetchCategory() {
    getData(
      "https://api-tp3-integration.onrender.com/categories/" + params.category
    )
      .then((category: Category) => {
        console.log(category);
        setCategoryData(category);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<MyFormCategoryProps>({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState("");
  const categoryNameRef = useRef(null);

  function onSubmit(data: MyFormCategoryProps) {
    putData("https://api-tp3-integration.onrender.com/categories/", data)
      .then((result) => {
        console.log(result);
        setMessage("La catégorie a été ajoutée avec succès !");
        reset();
      })
      .catch((error) => {
        console.error(error);
        setMessage("Il y a une erreur.");
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
