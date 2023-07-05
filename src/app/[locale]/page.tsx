"use client"
import React from 'react';
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
       title={t("home.page-title")}
    </>
  )
}