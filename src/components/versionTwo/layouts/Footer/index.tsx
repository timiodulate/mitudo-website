"use client";
import React from "react";
import NextLink from "next/link";
import {
	Box,
	Container,
	Flex,
	Heading,
	Link as ChakraLink,
	SimpleGrid,
	Stack,
	Text,
	Image,
} from "@chakra-ui/react";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	X,
} from "lucide-react";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Work", href: "#work" },
	{ label: "Services", href: "#services" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Contact", href: "#contact" },
];

const contactLinks = [
	{
		icon: Mail,
		label: "contact@mitudoagency.com",
		href: "mailto:contact@mitudoagency.com",
	},
	{
		icon: Phone,
		label: "+234 814 769 7225",
		href: "tel:+2348147697225",
	},
	{
		icon: MapPin,
		label: "Lagos, Nigeria",
		href: "https://maps.google.com/?q=Lagos,Nigeria",
	},
];

const socialLinks = [
	{
		label: "Instagram",
		href: "https://instagram.com/mitudoagency",
		icon: Instagram,
		color: "#E1306C",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/mitudoagency",
		icon: Linkedin,
		color: "#0077B5",
	},
	{
		label: "X",
		href: "https://x.com/mitudoagency",
		icon: X,
		color: "#FFFFFF",
	},
	{
		label: "Facebook",
		href: "https://facebook.com/mitudoagency",
		icon: Facebook,
		color: "#1877F2",
	},
];

export default function Footer() {
	return (
		<Box as="footer" bg="#0D1B2A" color="white">
			<Container maxW="6xl" py={16} px={{ base: 6, md: 0 }}>
				<SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mb={12}>
					<Box>
						{/* <Heading size="lg" mb={4} fontFamily="poppins">
							Mitudo<span style={{ color: "#0077FF" }}>.</span>
						</Heading> */}

						<ChakraLink
							as={NextLink}
							href="/"
							_hover={{ textDecoration: "none" }}
							mb={4}
						>
							<Image
								src="/assets/images/logo-primary-white-nude.png"
								alt="Mitudo Agency logo"
								w={100}
								// h={20}
								objectFit="contain"
								transition="transform 0.2s"
							/>
						</ChakraLink>

						<Text
							color="whiteAlpha.800"
							fontSize="sm"
							lineHeight="tall"
						>
							We help businesses look credible and get found
							online — from brand identity and registration to
							websites, SEO, and professional social media
							presence.
						</Text>
						<Flex gap={4} mt={6}>
							{socialLinks.map((link) => (
								<ChakraLink
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={link.label}
									color={link.color}
									_hover={{ opacity: 0.8 }}
								>
									<Box as={link.icon} boxSize={5} />
								</ChakraLink>
							))}
						</Flex>
					</Box>

					<Box>
						<Text
							fontSize="sm"
							fontWeight="semibold"
							letterSpacing="wide"
							textTransform="uppercase"
							mb={4}
						>
							Navigation
						</Text>
						<Stack gap={3}>
							{navLinks.map((link) => (
								<ChakraLink
									key={link.label}
									as={NextLink}
									href={link.href}
									color="whiteAlpha.800"
									_hover={{
										color: "#00C2CB",
										textDecoration: "none",
									}}
								>
									{link.label}
								</ChakraLink>
							))}
						</Stack>
					</Box>

					<Box>
						<Text
							fontSize="sm"
							fontWeight="semibold"
							letterSpacing="wide"
							textTransform="uppercase"
							mb={4}
						>
							Contact
						</Text>
						<Stack gap={3}>
							{contactLinks.map((item) => (
								<ChakraLink
									key={item.label}
									href={item.href}
									target={
										item.href.startsWith("http")
											? "_blank"
											: undefined
									}
									rel={
										item.href.startsWith("http")
											? "noopener noreferrer"
											: undefined
									}
									color="whiteAlpha.800"
									_hover={{
										color: "#00C2CB",
										textDecoration: "none",
									}}
								>
									<Flex align="center" gap={2}>
										<Box as={item.icon} boxSize={4} />
										<Text>{item.label}</Text>
									</Flex>
								</ChakraLink>
							))}
						</Stack>
					</Box>
				</SimpleGrid>

				<Flex
					justify="space-between"
					align="center"
					direction={{ base: "column", md: "row" }}
					gap={4}
					pt={8}
					borderTop="1px solid"
					borderColor="rgba(255,255,255,0.12)"
				>
					<Text color="whiteAlpha.700" fontSize="sm">
						© {new Date().getFullYear()} Mitudo Agency. All rights
						reserved.
					</Text>
					<ChakraLink
						href="https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20your%20business."
						target="_blank"
						rel="noopener noreferrer"
						fontSize="sm"
						fontWeight="semibold"
						color="#00C2CB"
						_hover={{ color: "#7EE4F5", textDecoration: "none" }}
					>
						Chat on WhatsApp →
					</ChakraLink>
				</Flex>
			</Container>
		</Box>
	);
}
