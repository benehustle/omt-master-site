import type { MetadataRoute } from "next";

const base = "https://outmarketthem.com";

const routes = [
  "",
  "/websites",
  "/rescue",
  "/advisory",
  "/about",
  "/work",
  "/contact",
  "/privacy",
  "/terms",
  "/refunds",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
