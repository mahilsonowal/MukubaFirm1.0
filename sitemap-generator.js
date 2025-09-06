import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URL
const SITE_URL = 'https://mukubaecon.io';

// Define all your routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about/institutional-background', priority: '0.8', changefreq: 'monthly' },
  { url: '/about/institutional-insights', priority: '0.8', changefreq: 'monthly' },
  { url: '/about/team-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/about/staff-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/about/internship', priority: '0.6', changefreq: 'monthly' },
  { url: '/about/team/clement-malala', priority: '0.6', changefreq: 'monthly' },
  { url: '/about/team/brad-elledge', priority: '0.6', changefreq: 'monthly' },
  { url: '/about/team/blessings-ntesa', priority: '0.6', changefreq: 'monthly' },
  { url: '/about/staff/thomson-silomba', priority: '0.6', changefreq: 'monthly' },
  { url: '/about/governance', priority: '0.8', changefreq: 'monthly' },
  { url: '/reports/annual-reports', priority: '0.9', changefreq: 'monthly' },
  { url: '/reports/strategic-plans', priority: '0.9', changefreq: 'monthly' },
  { url: '/research/research-work', priority: '0.9', changefreq: 'weekly' },
  { url: '/research/budget-analysis', priority: '0.8', changefreq: 'weekly' },
  { url: '/research/miscellaneous-research', priority: '0.8', changefreq: 'weekly' },
  { url: '/research/parliamentary-submissions', priority: '0.8', changefreq: 'weekly' },
  { url: '/research/policy-briefs', priority: '0.8', changefreq: 'weekly' },
  { url: '/research/working-papers', priority: '0.8', changefreq: 'weekly' },
  { url: '/notice-board/updates', priority: '0.7', changefreq: 'daily' },
  { url: '/services/capacity-building', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/feasibility-studies', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/consultancy-services', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/economic-research', priority: '0.9', changefreq: 'monthly' },
  { url: '/services/data-collection', priority: '0.8', changefreq: 'monthly' },
  { url: '/pages/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/pages/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/program/pathways-details', priority: '0.8', changefreq: 'monthly' },
  { url: '/pathways-details/past-events', priority: '0.7', changefreq: 'monthly' },
  { url: '/pathways-details/target-audience', priority: '0.7', changefreq: 'monthly' },
  { url: '/pathways-details/vision-mission', priority: '0.8', changefreq: 'monthly' },
  { url: '/pathways-details/sponsors', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/service-agreement', priority: '0.5', changefreq: 'yearly' },
  { url: '/b2b-service-agreement', priority: '0.5', changefreq: 'yearly' },
  { url: '/nda', priority: '0.5', changefreq: 'yearly' },
  { url: '/dpa', priority: '0.5', changefreq: 'yearly' }
];

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += '</urlset>';

  // Write sitemap to public folder
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('Sitemap generated successfully at:', sitemapPath);
  console.log(`Generated ${routes.length} URLs`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow admin and private routes
Disallow: /admin-dashboard
Disallow: /admin-upload-report
Disallow: /user-dashboard
Disallow: /login
Disallow: /reset-password
Disallow: /totp-reset
Disallow: /totp-setup

# Allow important pages
Allow: /about/
Allow: /services/
Allow: /research/
Allow: /reports/
Allow: /program/
Allow: /notice-board/

# Crawl delay (optional)
Crawl-delay: 1
`;

  const robotsPath = path.join(__dirname, 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  
  console.log('Robots.txt generated successfully at:', robotsPath);
}

// Run the generators
try {
  generateSitemap();
  generateRobotsTxt();
  console.log('SEO files generated successfully!');
} catch (error) {
  console.error('Error generating SEO files:', error);
}
