/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://oswinjerome.in",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // ...other options
};
