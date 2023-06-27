import { Button } from "@mui/material";

export default function MyButtonCancel() {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "white",
          border: "1px solid #007FFF",
          color: "#007FFF",
        }}
        variant="contained"
      >
        Annuler
      </Button>
    </>
  );
}
