import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const LAST_UPDATE = new Date("2026-10-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: `${SITE_URL}/politica-de-privacidade`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/termos-de-uso`, lastModified: LAST_UPDATE, changeFrequency: "yearly", priority: 0.3 },
  ];
}
