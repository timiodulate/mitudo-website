import { Metadata } from "next";
import ContactView from "@/components/versionTwo/sections/contact";
import { getService } from "@/data/services";

export const metadata: Metadata = {
	title: "Contact Us | Mitudo Agency",
	description:
		"Talk to Mitudo Agency on WhatsApp, by email or with the enquiry form. Tell us what you need and we'll send you a clear quote.",
};

type SearchParams = Promise<{ service?: string }>;

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
	const { service } = await searchParams;
	return <ContactView initialService={service ? getService(service)?.name : undefined} />;
}
