import { Button, useMediaQuery } from "@mui/material";

export default function MyButtonSave() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return <Button variant="contained">Enregistrer</Button>;
}
