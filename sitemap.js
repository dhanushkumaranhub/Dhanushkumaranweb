const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://dhanushkumaranweb.netlify.app' });

    // Add your site routes
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
    sitemap.write({ url: '/contact', changefreq: 'weekly', priority: 0.8 });

    sitemap.end();

    const sitemapXML = await streamToPromise(sitemap).then(data => data.toString());
    createWriteStream('./public/sitemap.xml').write(sitemapXML);
}

generateSitemap();
