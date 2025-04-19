// src/app/sitemap.js
export default function sitemap() {
    return [
      {
        url: 'https://tallerapp.xyz', // Remplacez par votre domaine réel
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://tallerapp.xyz/affiliation',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://tallerapp.xyz/privacy',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'https://tallerapp.xyz/terms',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ];
  }