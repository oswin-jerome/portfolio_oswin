/** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: process.env.SITE_URL || "https://www.oswinjerome.in",
//   generateRobotsTxt: true, // (optional)
//   generateIndexSitemap: false,
//   // ...other options
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.oswinjerome.in",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // custom function to ignore the path

    // only create changefreq along with path
    // returning partial properties will result in generation of XML field with only returned values.
    // if (customLimitedField(path)) {
    //   // This returns `path` & `changefreq`. Hence it will result in the generation of XML field with `path` and  `changefreq` properties only.
    //   return {
    //     loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    //     changefreq: "weekly",
    //   };
    // }

    var prio = config.priority;
    if (path == "/works" || path == "/blogs") {
      prio = 1;
    }

    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: prio,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
