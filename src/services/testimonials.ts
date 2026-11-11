import { fallbackTestimonials, type Testimonial } from "@/data/testimonials";

export const INTERNALS_API_URL =
	process.env.INTERNALS_API_URL ?? "https://mitudo-internals.vercel.app";

/** Approved testimonials from Mitudo Internals, in website order. Cached for 5 minutes. */
export async function getTestimonials(): Promise<Testimonial[]> {
	try {
		const res = await fetch(`${INTERNALS_API_URL}/api/public/testimonials`, {
			headers: { Accept: "application/json" },
			next: { revalidate: 300 },
		});
		if (!res.ok) throw new Error(`Testimonials request failed: ${res.status}`);
		const data = await res.json();
		return Array.isArray(data) ? data : fallbackTestimonials;
	} catch {
		return fallbackTestimonials;
	}
}
