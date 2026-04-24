"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Container,
	Flex,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";

const services = [
	{ label: "Brand Identity" },
	{ label: "Professional Websites" },
	{ label: "Google Business Profile" },
	{ label: "Social Media Setup" },
	{ label: "Domain & Email" },
	{ label: "Business Registration" },
];

export default function ServicesSection() {
	return (
		<Box as="section" py={{ base: 16, md: 20 }} px={6} bg="white">
			<Container maxW="4xl" textAlign="center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					{" "}
					<Text
						fontSize="sm"
						fontWeight="medium"
						letterSpacing="widest"
						textTransform="uppercase"
						color="#0077FF"
					>
						What We Do
					</Text>
					<Heading
						as="h2"
						fontSize={{ base: "3xl", md: "4xl" }}
						fontWeight="bold"
						mt={3}
						mb={4}
						fontFamily="poppins"
						color="#0D1B2A"
					>
						Services We Deliver
					</Heading>
					<Text color="#4A5568" mb={10} maxW="lg" mx="auto">
						We handle everything that gets a business looking
						credible and findable online.
					</Text>{" "}
					<Flex wrap="wrap" justify="center" gap={3}>
						{services.map((service, index) => (
							<Box
								key={index}
								px={5}
								py={2.5}
								bg="#F5F7FA"
								border="1px solid"
								borderColor="slate.200"
								rounded="full"
								fontSize="sm"
								fontWeight="medium"
								color="#0D1B2A"
							>
								{service.label}
							</Box>
						))}
					</Flex>
				</motion.div>
			</Container>
		</Box>
	);
}
