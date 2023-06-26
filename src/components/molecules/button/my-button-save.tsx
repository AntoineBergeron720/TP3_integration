import { Button } from "@mui/material";

export default function MyButtonSave() {
  return (
    <>     
      <Button
        sx={{
          backgroundColor: "#007FFF",
          border: "1px solid #007FFF",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          width: "30%",
        }}
        variant="contained"
      >
        Enregistrer
      </Button>
    </>
  );
}
