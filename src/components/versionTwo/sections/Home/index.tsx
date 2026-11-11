import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "../../layouts/Header/Navbar";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import TestimonialCarousel from "./TestimonialCarousel";
import WhyUs from "../../shared/WhyUs";
import Footer from "../../layouts/Footer";
import Pricing from "./Pricing";
import WebsiteRefresh from "./WebsiteRefresh";
import Maintenance from "./Maintenance";
import Contact from "./Contact";
import { getTestimonials } from "@/services/testimonials";

export default async function VersionTwoHome() {
	const testimonials = await getTestimonials();

	return (
		<Box minH="screen" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			{/* Hero Section */}
			<Hero />

			{/* How It Works Section */}
			<HowItWorks />

			{/* Services Section */}
			<Services />

			{/* Why Mitudo (the AI question) */}
			<WhyUs />

			{/* Pricing Section */}
			{/* <Pricing /> */}

			{/* Website Refresh Section */}
			{/* <WebsiteRefresh /> */}

			{/* Maintenance Section */}
			{/* <Maintenance /> */}

			{/* Testimonials Section */}
			<TestimonialCarousel testimonials={testimonials} />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</Box>
	);
}
