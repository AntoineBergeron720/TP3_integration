import { Button, useMediaQuery } from "@mui/material";

export default function MyButtonCancel() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Button variant="outlined">Annuler</Button>
    </>
  );
}
