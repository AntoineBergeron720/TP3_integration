"use client";


import { Box, Button, TextField } from "@mui/material";

export default function MyForm() {
  return (
    <>
      <Box>
    
        <TextField id="name" label="Name" variant="outlined" fullWidth />

        <Button color="primary" variant="contained">Enregistrer</Button>
      </Box>
    </>
  );
}
