import { Typography } from "@mui/material";
import React from "react";

interface MyPageTitleProps {
  title: string;
}

export default function MyPageTitle(props: MyPageTitleProps) {
  const { title } = props; 

  return (
    <Typography variant="h1">{props.title}</Typography>
  );
}
