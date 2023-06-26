import { Button } from "@mui/material";

export default function MyButtonCancel() {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "white",
          border: "1px solid #007FFF",
          color: "#007FFF",
          width: "30%",
        }}
        variant="contained"
      >
        Annuler
      </Button>
    </>
  );
}
