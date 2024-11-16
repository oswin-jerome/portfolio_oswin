/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.oswinjerome.in",
  generateRobotsTxt: false, // (optional)
  generateIndexSitemap: false,
  // ...other options
};
