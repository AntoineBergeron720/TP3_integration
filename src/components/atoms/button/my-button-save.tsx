import { Button, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";

export default function MyButtonSave() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const t = useTranslations("common");
  
  return (
    <Button variant="contained" sx={{ border: "2px solid #007FFF" }} type="submit">
      {t("save-btn")}
    </Button>
  );
}