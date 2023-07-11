import { Button, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";

export default function MyButtonCancel() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const t = useTranslations("common");

  return (
    <>
      <Button variant="outlined" sx={{ border: "2px solid #007FFF" }}>
      {t("cancel-btn")}
      </Button>
    </>
  );
}
