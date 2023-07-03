import React from 'react'
import { Typography, Box  } from "@mui/material";


type props = {
    title?: string;
    children: React.ReactNode;
}

export function Section({title, children}: props){
    return (
        <Box component="div" sx={{ px: 10, maxWidth: "1700px", margin: "auto" }} >
            <Typography
                variant="h1"
                align="left"
                style={{
                color: "#007FFF",
                fontSize: "2rem",
                fontFamily: "roboto",
                borderBottom: "1px solid #007FFF",
                paddingBottom: "15px",
                marginBottom: "25px"
                }}
            >
            { title }
            
            </Typography>
            <Box component="div" sx={{ mb: 4 }} >
            {children}
            </Box>
        </Box>
    )
}