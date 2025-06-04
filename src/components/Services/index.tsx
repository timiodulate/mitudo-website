// src/components/Services.tsx
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
	const ourServices = [
		{
			icon: FaLaptopCode,
			title: "Web Development",
			text: "Modern, responsive, and high-performance websites for a stunning online presence.",
		},
		{
			icon: FaCode,
			title: "Custom Software",
			text: "Bespoke software solutions tailored to your unique business needs and goals.",
		},
		{
			icon: FaMobileAlt,
			title: "Mobile Apps",
			text: "Engaging and intuitive iOS and Android applications that delight your users.",
		},
	];

	return (
		<Box id="services" p={8} bg="brand.gray.lightGray">
			<Box textAlign="center" mb={10}>
				<Heading as="h2" size="2xl" color="brand.gray.darkGray">
					Our Services
				</Heading>

				<Text fontSize="lg" color="brand.gray.mediumGray">
					We offer a wide range of development services.
				</Text>
			</Box>

			<SimpleGrid
				columns={{ base: 1, md: 3 }}
				// spacing={10}
			>
				{ourServices.map((service, index) => (
					<ServiceCard key={index} {...service} />
				))}
			</SimpleGrid>
		</Box>
	);
};
