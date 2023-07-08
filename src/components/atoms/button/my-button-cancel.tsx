"use client";

import { Button, useMediaQuery } from '@mui/material';

interface MyButtonCancelProps {
  onClick: () => void;
}

export default function MyButtonCancel({ onClick }: MyButtonCancelProps) {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{ border: '2px solid #007FFF' }}
      >
        Annuler
      </Button>
    </>
  );
}

