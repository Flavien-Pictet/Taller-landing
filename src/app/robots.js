// src/app/robots.js
export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      sitemap: 'https://tallerapp.xyz/sitemap.xml',
    };
  }