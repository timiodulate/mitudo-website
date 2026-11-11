"use client";
import React from "react";
import NextLink from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import { businessEmail, businessWABaseLink } from "@/data";
import { ROUTES } from "@/data/routes";

export default function ContactCTA({
	serviceName,
	title = "Let's get your business set up right",
	intro = "Tell us what you need. We'll ask a few quick questions and send you a clear quote. No pressure, no jargon.",
	id = "contact",
}: {
	serviceName?: string;
	title?: string;
	intro?: string;
	id?: string;
}) {
	const message = serviceName
		? `Hello Mitudo Agency, I'm interested in ${serviceName}.`
		: "Hello Mitudo Agency, I'm interested in your services.";
	const waLink = `${businessWABaseLink}?text=${encodeURIComponent(message)}`;
	const emailLink = `mailto:${businessEmail}${
		serviceName ? `?subject=${encodeURIComponent(`Enquiry: ${serviceName}`)}` : ""
	}`;

	return (
		<Box as="section" id={id} py={{ base: 16, md: 24 }} bg="#F5F7FA">
			<Container maxW="3xl" px={{ base: 6, md: 8 }}>
				<Box
					bg="#0D1B2A"
					color="white"
					borderRadius="3xl"
					p={{ base: 8, md: 12 }}
					textAlign="center"
				>
					<Text
						fontSize="sm"
						fontWeight="semibold"
						letterSpacing="wider"
						textTransform="uppercase"
						color="#00C2CB"
					>
						Contact
					</Text>
					<Heading
						as="h2"
						fontSize={{ base: "2xl", md: "3xl" }}
						fontWeight="bold"
						mt={3}
						fontFamily="poppins"
					>
						{title}
					</Heading>
					<Text color="whiteAlpha.800" mt={4} maxW="xl" mx="auto">
						{intro}
					</Text>

					<Flex
						direction={{ base: "column", md: "row" }}
						gap={4}
						justify="center"
						mt={8}
					>
						<ChakraLink
							href={waLink}
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "none" }}
						>
							<Button
								size="lg"
								w={{ base: "full", md: "auto" }}
								bg="#0077FF"
								color="white"
								borderRadius="full"
								px={8}
								_hover={{ bg: "#0066DD" }}
							>
								<MessageCircle size={16} />
								Chat on WhatsApp
							</Button>
						</ChakraLink>
						<ChakraLink href={emailLink} _hover={{ textDecoration: "none" }}>
							<Button
								size="lg"
								w={{ base: "full", md: "auto" }}
								variant="outline"
								color="white"
								borderColor="whiteAlpha.400"
								borderRadius="full"
								px={8}
								_hover={{ bg: "whiteAlpha.100" }}
							>
								<Mail size={16} />
								Send an Email
							</Button>
						</ChakraLink>
					</Flex>

					<ChakraLink
						as={NextLink}
						href={ROUTES.contact}
						display="inline-flex"
						alignItems="center"
						gap={1}
						mt={6}
						fontSize="sm"
						color="#00C2CB"
						_hover={{ color: "#7EE4F5", textDecoration: "none" }}
					>
						Or send us an enquiry form <ArrowRight size={14} />
					</ChakraLink>
				</Box>
			</Container>
		</Box>
	);
}
