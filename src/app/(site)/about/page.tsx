import { Metadata } from "next";
import AboutView from "@/components/versionTwo/sections/about";

export const metadata: Metadata = {
	title: "About Us | Mitudo Agency",
	description:
		"Mitudo Agency helps Nigerian businesses, organisations and personal brands get set up right, stand out and run smoothly, whether they are just starting or already running.",
};

export default function AboutPage() {
	return <AboutView />;
}
