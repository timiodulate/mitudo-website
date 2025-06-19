"use client";
// src/components/Services.tsx
import { SimpleGrid, Box, Heading, Text, Container } from "@chakra-ui/react";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { ServiceCard } from "./ServiceCard";
import { useColorModeValue } from "../ui/color-mode";
import {
	mobileDevIllustration,
	softwareIllustration,
	webDevIllustration,
} from "@/images";
import SectionTitleWrapper from "../shared/SectionTitleWrapper";

export const Services = () => {
	const ourServices = [
		{
			icon: webDevIllustration,

			title: "Web Development",
			// title="Web solutions"

			description:
				"Modern, responsive, and high-performance websites for a stunning online presence.",
		},
		{
			icon: mobileDevIllustration,

			title: "Mobile Development",

			description:
				"Crafting engaging and intuitive apps for iOS and Android platforms. Elegant design, robust code.",
		},
		{
			icon: softwareIllustration,
			title: "Custom Software",

			description:
				"Bespoke software solutions tailored to your unique business needs and goals.",
			// description="Tailored solutions built for your unique business needs. Flexible, scalable, secure."
		},
	];

	return (
		<Box as="section" id="services">
			<Container py={{ base: 12, md: 20 }}>
				<SectionTitleWrapper title="Services" />

				<SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={8}>
					{ourServices.map((service, index) => (
						<ServiceCard key={index} index={index} {...service} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
