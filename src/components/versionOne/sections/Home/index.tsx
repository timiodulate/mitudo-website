import Image from "next/image";

import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../../layouts/Header";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import Portfolio from "./Portfolio";
import { Testimonials } from "./Testimonials";
import CTA from "./CTA";
import { Footer } from "../../layouts/Footer";
import { Hero } from "./Hero";

export default function VersionOneHome() {
	return (
		<Box>
			<Header />
			<Hero />
			<Services />
			<AboutUs />
			<Portfolio />
			<Testimonials />
			<CTA />
			<Footer />
		</Box>
	);
}
