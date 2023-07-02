"use client";

import { Grid, TextField } from "@mui/material";
import MyButtonCancel from "../../atoms/button/my-button-cancel";
import MyButtonSave from "../../atoms/button/my-button-save";
import { saveCategory } from "@/app/category/new/page";


interface MyFormCategoryProps {
  categoryName: string;
  categoryId: string;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  const handleSave = async () => {
    try {
      const categoryData = {
        name: props.categoryName,
        id: props.categoryId,
      };

      const url = "https://api-tp3-integration.onrender.com/categories/"; 

      const response = await saveCategory(url, categoryData);

      console.log("Category saved successfully:", response);

      // Optionally, perform any additional actions after successful save
    } catch (error) {
      console.error("Failed to save category:", error);
    }
  };

  return (
    <Grid container rowGap={3} columnGap={2}>
      <Grid item xs={12}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={props.categoryName}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "2px solid #007FFF",
                borderRadius: "2px",
              },
            },
          }}
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
        <MyButtonSave onClick={handleSave} />
      </Grid>
    </Grid>
  );
}


