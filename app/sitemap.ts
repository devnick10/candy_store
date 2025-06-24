// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.raniagrofood.com',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
