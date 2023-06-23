"use client";


import { Box, Button, TextField } from "@mui/material";

export default function MyForm() {
  return (
    <>
      <Box>
    
        <TextField id="name" label="Name" variant="outlined" fullWidth />

        <Button sx={{backgroundColor:"white", border:"1px solid #007FFF", color:"#007FFF"}} variant="contained">Annuler</Button>
        <Button sx={{backgroundColor:"#007FFF", border:"1px solid #007FFF", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}} variant="contained">Enregistrer</Button>
      </Box>
    </>
  );
}
