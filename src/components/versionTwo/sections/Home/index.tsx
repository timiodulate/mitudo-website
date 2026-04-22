import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "../../layouts/Header/Navbar";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import TestimonialCarousel from "./TestimonialCarousel";
import RecentWork from "./RecentWork";
import Footer from "../../layouts/Footer";
import Pricing from "./Pricing";
import WebsiteRefresh from "./WebsiteRefresh";
import Maintenance from "./Maintenance";
import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mitudo Agency | Set up right. Look Legit. Get found by your customer.",
	description:
		"Mitudo Agency is a Nigeria-based tech solutions agency that helps businesses look credible and get found online — from brand identity and registration to websites, SEO, and professional social media presence.",
};

export default function VersionTwoHome() {
	return (
		<Box minH="screen" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			{/* Hero Section */}
			<Hero />

			{/* How It Works Section */}
			<HowItWorks />

			{/* Services Section */}
			<Services />

			{/* Recent Work Section */}
			<RecentWork />

			{/* Pricing Section */}
			{/* <Pricing /> */}

			{/* Website Refresh Section */}
			{/* <WebsiteRefresh /> */}

			{/* Maintenance Section */}
			{/* <Maintenance /> */}

			{/* Testimonials Section */}
			<TestimonialCarousel />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</Box>
	);
}
