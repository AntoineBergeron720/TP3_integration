import React, { useRef, useState } from 'react';
import { Box, Grid, TextField } from '@mui/material';
import MyButtonCancel from '../../atoms/button/my-button-cancel';
import { useForm } from 'react-hook-form';
import MyButtonSave from '@/components/atoms/button/my-button-save';
import { postData } from '@/app/common/jeuxApi';
import { useRouter } from 'next/router';


interface MyFormCategoryProps {
  name: string | undefined;
  categoryId: string | undefined;
}

export default function MyFormCategory(props: MyFormCategoryProps) {
  const { handleSubmit, register, formState: { errors } } = useForm<MyFormCategoryProps>();
  const [message, setMessage] = useState('');
  const categoryNameRef = useRef(null);
 const router = useRouter();

  const handleCancel = () => {
   router.push('/category/page');
  };


  function onSubmit(data: MyFormCategoryProps) {
    postData('https://api-tp3-integration.onrender.com/categories/', data)
    .then((result) => {
      console.log(result);
      setMessage('Category added');
    })
    .catch((error) => {
      console.error(error);
      setMessage('Error');
    });

   
  };

  return (
    <Box>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowGap={3} columnGap={2}>
          <Grid item xs={12}>
          <TextField
              id='name'
              label="Category Name"
              variant="outlined"
              fullWidth
              {...register("name")}
              inputProps={{ ref: categoryNameRef }}
              error={errors.name ? true : false}
              helperText={errors.name && 'This field is required'}
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
            <MyButtonCancel onClick={handleCancel} />
            <MyButtonSave />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
