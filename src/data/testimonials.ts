// Testimonials are managed in Mitudo Internals (Testimonials page): clients submit them on
// /testimonial, and only the ones approved there show on the site, in the order set there.

export interface Testimonial {
	id?: number;
	name: string;
	role: string | null;
	business: string | null;
	text: string;
	rating: number | null;
	/** The service page it belongs to (slug), if any. */
	service_slug: string | null;
}

/**
 * Shown only if Mitudo Internals can't be reached, so the site never loses its
 * testimonials to an outage. Once Internals answers, its list is used as-is
 * (even if empty), because that's where testimonials are controlled.
 */
export const fallbackTestimonials: Testimonial[] = [
	{
		name: "Emeka Okafor",
		role: "CEO",
		business: "D'Glides Apartments",
		text: "Mitudo Agency transformed how my real estate business looks online. Within weeks of launching, I started getting serious enquiries from people who found us on Google. The website looks exactly like what I imagined: professional and trustworthy.",
		rating: 5,
		service_slug: "business-website",
	},
];

export const testimonialByline = (testimonial: Testimonial) =>
	[testimonial.role, testimonial.business].filter(Boolean).join(", ");
