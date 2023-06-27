import { Button, useMediaQuery } from "@mui/material";

export default function MyButtonSave() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#007FFF",
          border: "1px solid #007FFF",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          padding: isMobile ? "8px 16px" : "12px 24px",
          fontSize: isMobile ? "14px" : "16px",
        }}
        variant="contained"
        fullWidth
      >
        Enregistrer
      </Button>
    </>
  );
}

