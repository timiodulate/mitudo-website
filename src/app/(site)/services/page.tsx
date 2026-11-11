import { Metadata } from "next";
import ServicesView from "@/components/versionTwo/sections/services";

export const metadata: Metadata = {
	title: "Services | Mitudo Agency",
	description:
		"Websites, domains and professional email, brand identity, Google Business Profile, social media setup, CAC registration, trademarks and custom software, done properly for Nigerian businesses.",
};

export default function ServicesPage() {
	return <ServicesView />;
}
