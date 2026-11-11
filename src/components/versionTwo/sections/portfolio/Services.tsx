"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Flex,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import { serviceCategories } from "@/data/services";
import { ROUTES } from "@/data/routes";

const services = serviceCategories
	.filter((category) => category.stage !== "start")
	.map((category) => ({ label: category.title, href: `${ROUTES.services}#${category.id}` }));

export default function ServicesSection() {
	return (
		<Box as="section" py={{ base: 16, md: 20 }} bg="white">
			<SectionContainer narrow="4xl" center>
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
						Everything your business needs to set up right, stand
						out and run smoothly, from one team.
					</Text>{" "}
					<Flex wrap="wrap" justify="center" gap={3}>
						{services.map((service) => (
							<ChakraLink
								as={NextLink}
								href={service.href}
								key={service.label}
								_hover={{ borderColor: "#0077FF", color: "#0077FF", textDecoration: "none" }}
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
							</ChakraLink>
						))}
					</Flex>
				</motion.div>
			</SectionContainer>
		</Box>
	);
}
