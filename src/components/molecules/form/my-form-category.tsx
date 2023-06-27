import {
  Box,
  Grid,
  FormControl,
  TextField,
  useMediaQuery,
} from "@mui/material";
import MyButtonSave from "../button/my-button-save";
import MyButtonCancel from "../button/my-button-cancel";

interface MyFormCategoryProps {
  name: string;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Grid
      container
    >
      <Grid item sm={12}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={props.name}
          fullWidth
        />
      </Grid>
      <Grid item sm={6}>
        <MyButtonCancel />
      </Grid>
      <Grid item sm={6}>
        <MyButtonSave />
      </Grid>
    </Grid>
  );
}
