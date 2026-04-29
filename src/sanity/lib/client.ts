import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-04-29", // Sesuaikan dengan tanggal hari ini
  useCdn: false, // Set false supaya data yang baru di-publish langsung muncul
});
