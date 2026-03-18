import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login"],
    },
    sitemap: "https://eta-skane.se/sitemap.xml",
  };
}
