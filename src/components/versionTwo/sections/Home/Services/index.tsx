"use client";

import React from "react";
import NextLink from "next/link";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Grid,
	Heading,
	Text,
	Flex,
	Button,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { Globe, Search, Award, Mail, Users, Shield, ArrowRight } from "lucide-react";
import { getServiceRoute, ROUTES } from "@/data/routes";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";

const featured = [
	{
		icon: Globe,
		title: "Websites",
		description:
			"A clean, fast website for your business, organisation or personal brand. Found when people search, trusted when they land.",
		href: getServiceRoute("business-website"),
		bg: "rgba(0, 119, 255, 0.1)",
		iconColor: "#0077FF",
	},
	{
		icon: Search,
		title: "Google Business Profile",
		description:
			"Show up on Google Maps when people search for what you do. We set it up, fill it in properly and see it through verification.",
		href: getServiceRoute("google-business-profile-setup"),
		bg: "rgba(0, 194, 203, 0.1)",
		iconColor: "#00C2CB",
	},
	{
		icon: Award,
		title: "Brand Identity",
		description:
			"A logo system, colours, fonts and brand guide. Take the full package, or just the logo or the guide.",
		href: getServiceRoute("full-brand-identity"),
		bg: "rgba(0, 119, 255, 0.1)",
		iconColor: "#0077FF",
	},
	{
		icon: Mail,
		title: "Domain & Professional Email",
		description:
			"Stop using Gmail for business. Get your own domain and an email like you@yourbusiness.com, for you or your whole team.",
		href: getServiceRoute("domain-email-bundle"),
		bg: "rgba(0, 194, 203, 0.1)",
		iconColor: "#00C2CB",
	},
	{
		icon: Users,
		title: "Social Media Setup",
		description:
			"Claim your handles and make every profile look like the same business: images, banners, details and a first post.",
		href: getServiceRoute("social-media-styling-setup"),
		bg: "rgba(0, 119, 255, 0.1)",
		iconColor: "#0077FF",
	},
	{
		icon: Shield,
		title: "Business & Company Registration",
		description:
			"Business name, company, LLP, NGO or church registration with the CAC, plus the yearly filings and trademarks.",
		href: `${ROUTES.services}#registration`,
		bg: "rgba(0, 194, 203, 0.1)",
		iconColor: "#00C2CB",
	},
];

export default function Services() {
	return (
		<Box as="section" id="services" py={{ base: 20, md: 28 }} bg="white">
			<SectionContainer>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Box textAlign="center" mb={16}>
						<Text
							fontSize="sm"
							fontWeight="medium"
							letterSpacing="wider"
							textTransform="uppercase"
							color="#0077FF"
						>
							Services
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							mt={4}
							fontFamily="poppins"
						>
							What We Do For You
						</Heading>
						<Text color="slate.600" maxW="3xl" mx="auto" mt={4}>
							Pick what you need, or let us audit your online
							presence and recommend the right starting point.
						</Text>
					</Box>
				</motion.div>

				<Grid
					templateColumns={{
						base: "1fr",
						sm: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={6}
				>
					{featured.map((service) => (
						<ChakraLink
							key={service.title}
							as={NextLink}
							href={service.href}
							display="block"
							_hover={{ textDecoration: "none" }}
						>
							<Box
								h="full"
								bg="#F5F7FA"
								borderRadius="3xl"
								p={7}
								border="1px solid"
								borderColor="slate.200"
								transition="all 0.3s"
								_hover={{
									borderColor: "rgba(0, 119, 255, 0.3)",
									boxShadow: "xl",
								}}
							>
								<Flex
									align="center"
									justify="center"
									w={12}
									h={12}
									borderRadius="xl"
									bg={service.bg}
									mb={5}
								>
									<service.icon size={24} color={service.iconColor} />
								</Flex>
								<Heading
									as="h3"
									fontSize="xl"
									fontWeight="bold"
									color="#0D1B2A"
									mb={2}
									fontFamily="poppins"
								>
									{service.title}
								</Heading>
								<Text color="slate.600" fontSize="sm" lineHeight="tall">
									{service.description}
								</Text>
								<Flex
									align="center"
									gap={1}
									mt={4}
									fontSize="sm"
									fontWeight="semibold"
									color="#0077FF"
								>
									Learn more <ArrowRight size={14} />
								</Flex>
							</Box>
						</ChakraLink>
					))}
				</Grid>

				<Flex justify="center" mt={12}>
					<ChakraLink
						as={NextLink}
						href={ROUTES.services}
						_hover={{ textDecoration: "none" }}
					>
						<Button
							size="lg"
							bg="#0077FF"
							color="white"
							borderRadius="full"
							px={8}
							_hover={{ bg: "#0066DD" }}
						>
							See all services
							<ArrowRight size={16} />
						</Button>
					</ChakraLink>
				</Flex>

				<Box
					mt={10}
					p={6}
					bg="#F5F7FA"
					borderRadius="3xl"
					border="1px solid"
					borderColor="slate.200"
					textAlign="center"
				>
					<Text color="slate.600" fontSize="sm" mb={1}>
						<Text as="span" fontWeight="semibold" color="#0D1B2A">
							Bundle & Save:
						</Text>{" "}
						Buy 3 or more services together and get 10 to 15% off
						the total. A package counts as one service.
					</Text>
					<Text color="slate.500" fontSize="xs">
						Payment terms: 50% upfront, 50% on delivery.
						Registrations and filings are paid in full upfront.
					</Text>
				</Box>
			</SectionContainer>
		</Box>
	);
}
