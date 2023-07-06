import { Button, useMediaQuery } from "@mui/material";

//interface MyButtonSaveProps {
 // onClick: () => void;
//}

export default function MyButtonSave({ onClick }: MyButtonSaveProps) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Button variant="contained" sx={{ border: "2px solid #007FFF" }} type="submit">
      Enregistrer
    </Button>
  );
}
