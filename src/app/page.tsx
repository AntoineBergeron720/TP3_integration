"use client";

import React from 'react';
import BasicTable from '@/components/molecules/my-Table/table';
import MyPageTitle from '@/components/molecules/title/my-page-title';
import { Section } from '@/components/molecules/section/section';
import { Typography, Box } from '@mui/material';


export default function Home() {
  return (
    <>
      <Box component="div" sx={{mb: "40px"}}>
        <MyPageTitle title="TP3-Intégration de l'API" />
      </Box>
      <Section title="Description du projet">
        <Typography style={{
          fontSize: "1.2rem",
          fontFamily: "roboto",
          marginBottom: "20px",
          fontWeight: "400",
        }}>

          Notre mandat est de créer une interface d’administration simple en utilisant les composantes de Material UI et Next.js. Ce
          panneau d’administration est lié a l’API conçue dans le cadre du cour “Programmation 1” et a été créé afin qu’il soit
          simple et facile à employer. Notez ci-haut les membres de l’équipe qui ont permis la réalisation de ce projet ainsi que
          leur rôle dans l’équipe et leur compte Github. Outre la présente page d’accueil, vous trouverez sur ce site un module
          qui traite des différents produits offerts par une entreprise de jouet, ainsi que leurs catégories.</Typography>
        <BasicTable />

      </Section>

    </>
  );
}