import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import WhyUs from "../../shared/WhyUs";
import ContactCTA from "../../shared/ContactCTA";
import Hero from "./Hero";
import WhoWeHelp from "./WhoWeHelp";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import TestimonialCarousel from "./TestimonialCarousel";
import Faq from "./Faq";
import { getTestimonials } from "@/services/testimonials";

export default async function VersionTwoHome() {
	const testimonials = await getTestimonials();

	return (
		<Box minH="screen" bg="#F5F7FA" fontFamily="inter">
			<Navbar />
			<Hero />
			<WhoWeHelp />
			<Services />
			<HowItWorks />
			<WhyUs />
			<TestimonialCarousel testimonials={testimonials} />
			<Faq />
			<ContactCTA
				title="Ready to hand some of it over?"
				intro="Tell us where your business is and what's taking your time. We'll ask a few quick questions and send you a clear quote."
			/>
			<Footer />
		</Box>
	);
}
