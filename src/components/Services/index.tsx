"use client";
// src/components/Services.tsx
import { SimpleGrid, Box, Heading, Text, Container } from "@chakra-ui/react";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { ServiceCard } from "./ServiceCard";
import { useColorModeValue } from "../ui/color-mode";

export const Services = () => {
	const ourServices = [
		{
			icon: <FaLaptopCode />,

			title: "Web Development",
			// title="Web solutions"

			description:
				"Modern, responsive, and high-performance websites for a stunning online presence.",
			// description="Crafting intuitive apps for iOS and Android platforms. Elegant design, robust code."
		},
		{
			icon: <FaCode />,
			title: "Custom Software",

			description:
				"Bespoke software solutions tailored to your unique business needs and goals.",
			// description="Tailored solutions built for your unique business needs. Flexible, scalable, secure."
		},
		{
			icon: <FaMobileAlt />,

			// title: "Mobile Apps",
			title: "Mobile development",

			// text: "Engaging and intuitive iOS and Android applications that delight your users.",
			description:
				"Crafting intuitive apps for iOS and Android platforms. Elegant design, robust code.",
		},
	];

	return (
		<Box as="section" id="services" minH={"100vh"}>
			<Container py={{ base: 12, md: 20 }}>
				<Box textAlign="center" mb={12}>
					<Heading
						as="h2"
						fontSize={{
							base: "lg",
							//  md: "4xl"
						}}
						fontWeight="bold"
						textAlign="center"
						color="services.section-title"
						// size="2xl" color="brand.gray.darkGray"

						// initial={{ y: -50, opacity: 0 }}
						// whileInView={{ y: 0, opacity: 1 }}
						// viewport={{ once: true }}
						// transition={{ duration: 0.6 }}
					>
						{/* Our  */}
						Services
					</Heading>

					{/* <Text fontSize="lg" color="brand.gray.mediumGray">
					We offer a wide range of development services.
				</Text> */}
				</Box>

				<SimpleGrid columns={{ base: 1 }} gap={{ mdDown: 8, md: 2 }}>
					{ourServices.map((service, index) => (
						<ServiceCard key={index} index={index} {...service} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
