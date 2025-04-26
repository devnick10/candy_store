export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/favicon.ico'],
      disallow: [
        '/private/',
        '/admin/',
        '/dashboard/',
        '/api/',
        '/test/'
      ],
    },
    sitemap: 'https://www.raniagrofood.com/sitemap.xml',
    host: 'https://www.raniagrofood.com'
  }
}