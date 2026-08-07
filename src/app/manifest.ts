import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.firstName,
    description: site.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0d11',
    theme_color: '#0c0d11',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
