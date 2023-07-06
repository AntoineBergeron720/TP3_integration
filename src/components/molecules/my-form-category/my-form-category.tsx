import React, { useRef, useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import MyButtonCancel from '../../atoms/button/my-button-cancel';
import { useForm } from 'react-hook-form';
import MyButtonSave from '@/components/atoms/button/my-button-save';

interface MyFormCategoryProps {
  categoryName: string | undefined;
  categoryId: string | undefined;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');
  const categoryNameRef = useRef(null);

  const onSubmit = async (data: any) => {
    try {
      // Make API request to create a new category
      const response = await fetch('"https://api-tp3-integration.onrender.com/categories/"', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Category created successfully
        setMessage('Your category was added successfully');
      } else {
        // Handle API error
        setMessage('Failed to create category');
      }
    } catch (error) {
      // Handle network error
      setMessage('An error occurred');
      console.error('An error occurred', error);
    }
  };

  return (
    <Box>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
          <TextField
              name="categoryName"
              label="Category Name"
              variant="outlined"
              fullWidth
              inputProps={{ ref: categoryNameRef }}
              error={errors.categoryName ? true : false}
              helperText={errors.categoryName && 'This field is required'}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <MyButtonCancel />
            <MyButtonSave />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
