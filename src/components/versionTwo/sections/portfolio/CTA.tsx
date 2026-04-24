"use client";
import React from "react";
import NextLink from "next/link";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Icon,
	Image,
	Link as ChakraLink,
	Stack,
	Text,
} from "@chakra-ui/react";

export default function CTA() {
	return (
		<Box as="section" py={{ base: 16, md: 24 }} px={6} bg="#F5F7FA">
			<Container maxW="3xl" textAlign="center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					{" "}
					<Heading
						as="h2"
						fontSize={{ base: "3xl", md: "4xl" }}
						fontWeight="bold"
						color="#0D1B2A"
						fontFamily="poppins"
						mb={4}
					>
						Want Your Business to Look Like This?
					</Heading>
					<Text color="#4A5568" fontSize="lg" mb={8}>
						Let&apos;s build something that makes your business look
						real, professional, and easy to find.
					</Text>
					<Flex
						direction={{ base: "column", sm: "row" }}
						gap={4}
						justify="center"
					>
						<ChakraLink
							href="https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20your%20services."
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "none" }}
							w={{ base: "full", sm: "auto" }}
						>
							<Button
								size="lg"
								bg="#0077FF"
								color="white"
								_hover={{ bg: "#0066DD" }}
								px={8}
								py={6}
								rounded="full"
								boxShadow="lg"
							>
								Start a Conversation
							</Button>
						</ChakraLink>
						<ChakraLink
							as={NextLink}
							href="/contact"
							_hover={{ textDecoration: "none" }}
							w={{ base: "full", sm: "auto" }}
						>
							<Button
								size="lg"
								variant="outline"
								borderColor="#0D1B2A"
								color="#0D1B2A"
								_hover={{ bg: "#0D1B2A10" }}
								px={8}
								py={6}
								rounded="full"
							>
								{" "}
								Send an Enquiry
							</Button>
						</ChakraLink>
					</Flex>
				</motion.div>
			</Container>
		</Box>
	);
}
