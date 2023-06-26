"use client";

import { Box, FormControl, TextField } from "@mui/material";
import MyButtonSave from "../button/my-button-save";
import MyButtonCancel from "../button/my-button-cancel";

interface MyFormCategoryProps {
  name: string;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  return (
    <>
      <FormControl sx={{ display: "flex", justifyContent: "center"}}
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={props.name}
          
          sx={{ width: "50%", height: "50px" }}
        />

        <MyButtonSave />
        <MyButtonCancel />
      </FormControl>
    </>
  );
}
