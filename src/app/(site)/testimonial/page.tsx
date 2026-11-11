import { Metadata } from "next";
import TestimonialView from "@/components/versionTwo/sections/testimonial";
import { getService } from "@/data/services";

export const metadata: Metadata = {
	title: "Leave a Testimonial | Mitudo Agency",
	description: "Tell us how working with Mitudo Agency went.",
	// Shared directly with clients; keep it out of search results.
	robots: { index: false, follow: false },
};

type SearchParams = Promise<{ service?: string }>;

export default async function TestimonialPage({ searchParams }: { searchParams: SearchParams }) {
	const { service } = await searchParams;
	const initialService = service && getService(service) ? service : undefined;
	return <TestimonialView initialService={initialService} />;
}
