import { Button, useMediaQuery } from "@mui/material";

export default function MyButtonCancel() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Button
        sx={{
          backgroundColor: "white",
          border: "1px solid #007FFF",
          color: "#007FFF",
          padding: isMobile ? "8px 16px" : "12px 24px",
          fontSize: isMobile ? "14px" : "16px",
        }}
        variant="contained"
        fullWidth
      >
        Annuler
      </Button>
    </>
  );
}

