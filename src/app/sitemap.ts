import { services } from "@/data/services";

const siteUrl = "https://mitudoagency.com";

export default function sitemap() {
	const pages = ["", "/about", "/services", "/contact", "/portfolio"];
	return [
		...pages.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() })),
		...services.map((service) => ({
			url: `${siteUrl}/services/${service.slug}`,
			lastModified: new Date(),
		})),
	];
}
