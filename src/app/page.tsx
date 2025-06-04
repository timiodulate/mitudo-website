import Image from "next/image";

import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<Box>
			<Header />
			<Hero />
			<Services />
			<Footer />
		</Box>
	);
}
