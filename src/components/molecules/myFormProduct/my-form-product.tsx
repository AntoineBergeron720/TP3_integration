import { Grid, TextField, Button, Select } from "@mui/material";
import MyButtonCancel from "../../atoms/button/my-button-cancel";
import MyButtonSave from "../../atoms/button/my-button-save";

interface MyFormProductProps {
  title: string;
  description: string;
  price: number;
  categoryId: string;
  categoriesId: string[];
}

export default function MyFormProduct(props: MyFormProductProps) {
  return (
    <Grid container rowGap={3} columnGap={2}>
      <Grid item xs={12}>
        <TextField
          id="title"
          label="title"
          variant="outlined"
          value={props.title}
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
        <Grid item xs={12}>
          <TextField
            id="description"
            label="description"
            variant="outlined"
            value={props.description}
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
        <Grid item xs={12}>
          <TextField
            id="price"
            label="price"
            variant="outlined"
            value={props.price}
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
        <Grid item xs={12}>
          <Select
            id="categoryId"
            label="categoryId"
            variant="outlined"
            value={props.categoryId}
            fullWidth
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "2px" } }}
          >
            {props.categoriesId.map((categoryId) => (
              <option key={categoryId} value={categoryId}>
                {categoryId}
              </option>
            ))}
          </Select>        
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
  </Grid>
  );
}
