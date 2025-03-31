// In your ESM file (e.g., app.mjs)

(async () => {
    const { createSitemap } = await import('sitemap');  // Destructure the function from the module
  
    const fs = await import('fs');
    const path = await import('path');
  
    // Example list of products, replace with actual data
    const products = [
      { slug: 'product-1', lastModified: '2025-03-31' },
      { slug: 'product-2', lastModified: '2025-03-31' },
      { slug: 'product-3', lastModified: '2025-03-31' },
    ];
  
    // Define the base URL of your site
    const baseUrl = 'https://www.yourwebsite.com';
  
    // Generate the sitemap
    const sitemapUrls = [
      { url: '/', changefreq: 'daily', priority: 1.0, lastmod: '2025-03-31' },
      { url: '/products', changefreq: 'weekly', priority: 0.8, lastmod: '2025-03-31' },
      { url: '/contact', changefreq: 'monthly', priority: 0.5, lastmod: '2025-03-31' },
      // Add dynamically generated product pages
      ...products.map((product) => ({
        url: `/product/${product.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: product.lastModified,
      })),
    ];
  
    // Create the sitemap XML
    const sitemapXML = createSitemap({
      hostname: baseUrl,
      urls: sitemapUrls,
    }).toString();
  
    // Write the sitemap to the public directory
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXML);
  
    console.log('Sitemap generated successfully!');
  })();
  