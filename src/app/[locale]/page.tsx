"use client"
import React from 'react';
import { useTranslations } from "next-intl";
import BasicTable from '@/components/molecules/my-Table/table';
import { Section } from '@/components/molecules/section/section';
import MyPageTitle from '@/components/molecules/title/my-page-title';
import { Box, Typography } from '@mui/material';

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Box component="div" sx={{mb: "40px"}}>
        <MyPageTitle title={t("home.page-title")} />
      </Box>
      <Section title={t("home.project-description-title")}>
        <Typography style={{
          fontSize: "1.2rem",
          fontFamily: "roboto",
          marginBottom: "20px",
          fontWeight: "400",
          color: '#333',
          textAlign: "justify",
        }}>
          {t('home.project-description-text')}</Typography>
        <BasicTable />
      </Section>
    </>
  )
}




