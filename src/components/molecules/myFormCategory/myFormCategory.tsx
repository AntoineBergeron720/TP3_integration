import React, { useRef, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import MyButtonCancel from "@/components/atoms/button/my-button-cancel";
import { useForm } from "react-hook-form";
import MyButtonSave from "@/components/atoms/button/my-button-save";
import { createCategory } from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    name: yup.string().required(),
  })
  .required();
//type FormData = yup.InferType<typeof schema>;

interface MyFormCategoryProps {
  name?: string | null;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<MyFormCategoryProps>({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState("");
  const categoryNameRef = useRef(null);
  const router = useRouter();

  function onSubmit(data: MyFormCategoryProps) {
    createCategory(data).then((result) => {
      setMessage("")
      toast.success('Catégorie ajoutée!')
      if(categoryNameRef && categoryNameRef.current){
        categoryNameRef.current.value = ""
        router.push('/category')
      }

    })
    .catch((error) => {
      console.error(error);
      setMessage("Error");
    });
      
  }

  return (
    <Box>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Category Name"
              variant="outlined"
              fullWidth
              {...register("name")}
              defaultValue={props.name}
              inputProps={{ ref: categoryNameRef }}
              error={!!errors.name}
              helperText={errors.name?.message}
              required
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
            <MyButtonCancel />
            <MyButtonSave />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
