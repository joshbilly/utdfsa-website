const fs = require('fs');
const path = require('path');

// Your website's base URL
const SITE_URL = 'https://utdfsa.org';

// Static routes in your React app
const staticRoutes = [
  '',           // Homepage
  '/about',
  '/dance', 
  '/goodphil',
  '/membership',
  '/media',
  '/events',
  '/pamilyas',
  '/faq'
];

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urlElements = staticRoutes.map(route => {
    const loc = `${SITE_URL}${route}`;
    const priority = route === '' ? '1.0' : '0.8';
    const changefreq = route === '/events' ? 'weekly' : 'monthly';
    
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

// Run the script
writeSitemap();
