import { MetadataRoute } from 'next'

// Ensure this route is statically generated for `output: 'export'`
export const dynamic = 'force-static'
export const revalidate = 86400 // 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sunitcarpenter.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://sunitcarpenter.com/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sunitcarpenter.com/#experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sunitcarpenter.com/#skills',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sunitcarpenter.com/#education',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://sunitcarpenter.com/#contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
