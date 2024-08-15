import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/api/og/*', '/'],
            disallow: '/private/',
        },
        sitemap: process.env.NEXT_PUBLIC_API_URL + '/sitemap.xml',
    }
}