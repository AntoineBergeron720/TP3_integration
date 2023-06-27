"use client";

import { Box, FormControl, TextField } from "@mui/material";
import MyButtonSave from "../button/my-button-save";
import MyButtonCancel from "../button/my-button-cancel";

interface MyFormCategoryProps {
  name: string;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControl sx={{ marginTop: "10px", width: "25%" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={props.name}
          sx={{
            height: "50px",
            marginBottom: "20px",
            marginTop: "25%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#007FFF", 
              },
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Box sx={{ marginLeft: "10" }}>
            <MyButtonCancel />
          </Box>
          <Box sx={{ marginRight: "0px" }}>
            <MyButtonSave />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}
