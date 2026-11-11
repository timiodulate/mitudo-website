"use client";
import React from "react";
import NextLink from "next/link";
import { motion } from "@/components/ui/motion";
import { Box, Container, Grid, Heading, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Clock, RefreshCcw, BadgeCheck, Layers, ArrowRight } from "lucide-react";
import { ROUTES } from "@/data/routes";

const reasons = [
	{
		icon: Clock,
		title: "No time spent learning",
		text: "Every platform has its own settings, rules and quirks. We already know them, so you don't spend evenings figuring them out.",
	},
	{
		icon: RefreshCcw,
		title: "No trial and error",
		text: "Emails landing in spam, a Google profile stuck in verification, a logo that blurs on a signboard. We've seen the mistakes, so we avoid them.",
	},
	{
		icon: BadgeCheck,
		title: "Done properly",
		text: "AI can give you a draft. We're professionals who know what \"done right\" looks like, and we check every piece before it reaches you.",
	},
	{
		icon: Layers,
		title: "Everything fits together",
		text: "Your registration, brand, website, email, Google listing and social profiles all say the same thing, because one team set them up.",
	},
];

export default function WhyUs({
	showLink = true,
	bg = "#F5F7FA",
}: {
	showLink?: boolean;
	bg?: string;
}) {
	return (
		<Box as="section" id="why-us" py={{ base: 20, md: 28 }} bg={bg}>
			<Container maxW="6xl" px={{ base: 6, md: 8 }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Box textAlign="center" mb={14}>
						<Text
							fontSize="sm"
							fontWeight="medium"
							letterSpacing="wider"
							textTransform="uppercase"
							color="#0077FF"
						>
							Why Mitudo
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							mt={4}
							fontFamily="poppins"
						>
							Yes, you could do it yourself with AI.
						</Heading>
						<Text color="#4A5568" maxW="3xl" mx="auto" mt={4}>
							AI has made a lot of this easier to attempt. But
							your time is better spent running your business.
							We're the professionals who do it for you, quickly
							and properly.
						</Text>
					</Box>
				</motion.div>

				<Grid
					templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
					gap={6}
				>
					{reasons.map((reason) => (
						<Flex
							key={reason.title}
							gap={4}
							bg={bg === "white" ? "#F5F7FA" : "white"}
							borderRadius="2xl"
							p={6}
							border="1px solid"
							borderColor="slate.200"
						>
							<Flex
								align="center"
								justify="center"
								flexShrink={0}
								w={11}
								h={11}
								borderRadius="xl"
								bg="rgba(0, 119, 255, 0.1)"
								color="#0077FF"
							>
								<reason.icon size={20} />
							</Flex>
							<Box>
								<Heading
									as="h3"
									fontSize="lg"
									color="#0D1B2A"
									fontFamily="poppins"
									mb={2}
								>
									{reason.title}
								</Heading>
								<Text color="#4A5568" fontSize="sm" lineHeight="tall">
									{reason.text}
								</Text>
							</Box>
						</Flex>
					))}
				</Grid>

				{showLink && (
					<Flex justify="center" mt={10}>
						<ChakraLink
							as={NextLink}
							href={ROUTES.services}
							color="#0077FF"
							fontWeight="semibold"
							display="inline-flex"
							alignItems="center"
							gap={2}
							_hover={{ color: "#0066DD", textDecoration: "none" }}
						>
							See everything we can do for you
							<ArrowRight size={16} />
						</ChakraLink>
					</Flex>
				)}
			</Container>
		</Box>
	);
}
