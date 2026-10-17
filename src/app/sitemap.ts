import { MetadataRoute } from "next";
import { ROOMS_DATA } from "@/content/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://penchbigcat.com";

  const staticRoutes = [
    "",
    "/stay",
    "/our-story",
    "/experiences",
    "/gallery",
    "/contact",
    "/booking-inquiry",
    "/privacy-policy",
    "/terms",
    "/safari-nearby",
    "/offers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const roomRoutes = ROOMS_DATA.map((room) => ({
    url: `${baseUrl}/stay/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...roomRoutes];
}
