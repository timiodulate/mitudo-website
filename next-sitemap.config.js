/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://mitudoagency.com",

	generateRobotsTxt: true, // also creates robots.txt

	changefreq: "weekly",
	priority: 0.7,

	sitemapSize: 7000,

	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},

	// Ensures ONLY your real domain is used
	transform: async (config, path) => {
		return {
			loc: path, // auto adds siteUrl
			changefreq: "weekly",
			priority: path === "/" ? 1.0 : 0.7,
			lastmod: new Date().toISOString(),
		};
	},

	additionalPaths: async (config) => [
		await config.transform(config, "/"),
		// await config.transform(config, "/about"),
		await config.transform(config, "/contact"),
		await config.transform(config, "/portfolio"),
		// await config.transform(config, "/portfolio/"),
	],
};
