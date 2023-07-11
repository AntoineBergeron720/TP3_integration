import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createCategory, getCategoryById, updateCategory } from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Categories } from "@/types/modules";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";


const schema = yup
  .object({
    name: yup.string().max(50).required(),
  })
  .required();
 
  

interface MyFormCategoryProps {
  name: string;
}

export function MyFormCategory(props: MyFormCategoryProps) {
  const t = useTranslations();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<MyFormCategoryProps>({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState("");
  const categoryNameRef = useRef(null);

  function onSubmit(data: MyFormCategoryProps) {
    createCategory(data)
      .then((result) => {
        setMessage("");
        toast.success(t("categories.toast-add-success"));
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
    reset();
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label={t("categories.label-name")}
              variant="outlined"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              onClick={clearMessage}
            />
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
              {t("common.cancel-btn")}
            </Button>

            <Button
              variant="contained"
              sx={{ border: "2px solid #007FFF" }}
              type="submit"
              disabled={!isValid}
            >
              {t("common.save-btn")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

interface EditCategoryPageProps {
  name: string;
  categoryId: string;
}

export function MyFormEditCategory(props: EditCategoryPageProps) {
  const t = useTranslations();
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
  } = useForm<EditCategoryPageProps>({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState("");
  //const categoryNameRef = useRef(null);

  function onSubmit(data: EditCategoryPageProps) {
    updateCategory(data, props.categoryId)
      .then((result) => {
        toast.success(t("categories.toast-edit-success"));
        reset();
      })
      .catch((error) => {
        setMessage(t("categories.msg-error"));
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
  const router = useRouter()

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
            <TextField
              label={t("categories.label-name")}
              id="name"
              variant="outlined"
              fullWidth
              {...register("name")}
              defaultValue={props.name}
              error={!!errors.name}
              helperText={errors.name?.message}
              required
              onClick={clearMessage}
            />
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
              {t("common.cancel-btn")}
            </Button>

            <Button
              variant="contained"
              onClick={() => router.push('/category')}
              sx={{ border: "2px solid #007FFF" }}
              type="submit"
              disabled={!isValid}
            >
              {t("common.save-btn")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
