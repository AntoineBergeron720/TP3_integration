"use client";

import { Button, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

//interface MyButtonCancelProps {
//  onClick: () => void;
//}

export default function MyButtonCancel() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const router = useRouter();
  
  return (
    <>
      <Button
      type="button"
        variant="outlined"
        onClick={() => router.push('/category')}
        sx={{ border: '2px solid #007FFF' }}
      >
        Annuler
      </Button>
    </>
  );
}

