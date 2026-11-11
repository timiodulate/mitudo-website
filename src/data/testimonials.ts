export interface Testimonial {
	name: string;
	role: string;
	business: string;
	text: string;
	/** Service slugs this client bought, so service pages can show it. */
	services: string[];
}

// Only real client testimonials go here.
export const testimonials: Testimonial[] = [
	{
		name: "Emeka Okafor",
		role: "CEO",
		business: "D'Glides Apartments",
		text: "Mitudo Agency transformed how my real estate business looks online. Within weeks of launching, I started getting serious enquiries from people who found us on Google. The website looks exactly like what I imagined: professional and trustworthy.",
		services: ["business-website", "domain-to-website-connection"],
	},
];

export const getTestimonialsForService = (slug: string) =>
	testimonials.filter((testimonial) => testimonial.services.includes(slug));
