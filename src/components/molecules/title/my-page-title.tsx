import { Typography } from "@mui/material";
import React from "react";

interface MyPageTitleProps {
  title: string;
}

export default function MyPageTitle(props: MyPageTitleProps) {
  const { title } = props;

  return (
    <Typography
      variant="h1"
      align="center"
      style={{
        color: "#007FFF",
        fontSize: "2rem",
        fontFamily: "roboto",
        marginTop: "5%",
      }}
    >
      {props.title}
    </Typography>
  );
}
