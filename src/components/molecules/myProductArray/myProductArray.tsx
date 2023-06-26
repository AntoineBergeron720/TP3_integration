"use client";

import { DataGrid } from '@mui/x-data-grid';

interface MyProductArrayProps {
  myProductArray: any;
}

export default function MyProductArray(props: MyProductArrayProps) {
  const columns = [
    { field: 'name', headerName: 'Product Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130},
    { field: 'price', headerName: 'Price', width: 90 }
  ];
  const rows = props.myProductArray;
  return (
    <DataGrid columns={columns} rows={rows} />
  );
}
