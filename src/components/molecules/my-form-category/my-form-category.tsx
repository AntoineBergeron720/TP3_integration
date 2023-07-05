import { Grid, TextField, Button } from "@mui/material";
import MyButtonCancel from "../../atoms/button/my-button-cancel";
import MyButtonSave from "../../atoms/button/my-button-save";

interface MyFormCategoryProps {
  name: string;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  return (
    <Grid container rowGap={3} columnGap={2}>
      <Grid item xs={12}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={props.name}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "2px solid #007FFF", 
                borderRadius: "2px", 
              },
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <MyButtonCancel />
        <MyButtonSave />
      </Grid>
    </Grid>
  );
}
