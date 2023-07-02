"use client";

import { Grid, TextField } from "@mui/material";
import MyButtonCancel from "../../atoms/button/my-button-cancel";
import MyButtonSave from "../../atoms/button/my-button-save";
import { postData } from "@/app/common/jeuxApi";


interface MyFormCategoryProps {
  categoryName: string | undefined;
  categoryId: string | undefined;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  const handleSave = () => {
    postData("category", {
      name: props.categoryName,
    }).then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
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


