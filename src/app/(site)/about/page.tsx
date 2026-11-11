import { Metadata } from "next";
import AboutView from "@/components/versionTwo/sections/about";

export const metadata: Metadata = {
	title: "About Us | Mitudo Agency",
	description:
		"Mitudo Agency helps Nigerian businesses, organisations and professionals get set up right, look legit and get found online. You could learn to do it yourself with AI; we do it for you, properly.",
};

export default function AboutPage() {
	return <AboutView />;
}
