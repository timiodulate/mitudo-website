"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Container,
	Heading,
	Text,
	Grid,
	VStack,
	Image,
	Badge,
	useToken,
	Flex,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function RecentWork() {
	const [cardBg, cardBorder, textPrimary, textSecondary, noteText] = useToken(
		"colors",
		[
			"recentWork.card.bg",
			"recentWork.card.border",
			"recentWork.section-title",
			"recentWork.card.subtitle",
			"recentWork.note.text",
		],
	);

	const projects = [
		{
			title: "D'Glides",
			type: "Business Website",
			features: [
				"Clean 5-page website",
				"Mobile-friendly",
				"Contact form + WhatsApp button",
				"Clear service presentation",
			],
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
			liveLink: "https://dglidestcl.com/",
		},
		{
			title: "City Initiative",
			type: "Business Website",
			features: [
				"Homepage + About + Programs",
				"Easy navigation for parents/students",
				"Professional layout",
				"Astonishing Design",
			],
			image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",

			liveLink: "https://city-initiative-dev.netlify.app",
		},
		{
			title: "Logistics / Real Estate",
			type: "Concept Design",
			features: [
				"Modern business layout",
				"Strong credibility focus",
				"Clear call-to-action",
			],
			image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		},
	];

	return (
		<Box as="section" id="work" py={{ base: 20, md: 28 }} px={6}>
			<Container maxW="6xl">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<VStack m={4} textAlign="center" mb={16}>
						<Text
							fontSize="sm"
							fontWeight="medium"
							letterSpacing="wider"
							textTransform="uppercase"
							color="#0077FF"
						>
							Portfolio
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "3xl", md: "4xl" }}
							fontWeight="bold"
							color={"#0d1b2a"}
							fontFamily="poppins"
							mt={3}
							mb={4}
						>
							Recent Work
						</Heading>
						<Text color={"slate.600"} maxW="xl" mx="auto">
							Here are a few recent websites I've worked on and
							sample projects similar to what I build for clients.
						</Text>
					</VStack>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<Grid
						templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
						gap={8}
					>
						{projects.map((project, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Box
									bg={cardBg}
									backgroundColor={"white"}
									borderRadius="2xl"
									overflow="hidden"
									// border={`1px solid`}
									borderWidth={1}
									borderColor={"slate.200"}
									boxShadow="sm"
									_hover={{
										boxShadow: "xl",
									}}
									transition="all 0.5s"
									_groupHover={{
										"& img": {
											transform: "scale(1.1)",
										},
									}}
									role="group"
								>
									{/* Image Container */}
									<Box
										position="relative"
										h={48}
										overflow="hidden"
									>
										<Image
											src={project.image}
											alt={project.title}
											w="full"
											h="full"
											objectFit="cover"
											transition="transform 0.7s"
											_groupHover={{
												transform: "scale(1.1)",
											}}
										/>
										<Box
											position="absolute"
											inset={0}
											bgGradient="to-t"
											gradientFrom={
												"rgba(13, 27, 42, 0.7)"
											}
											gradientTo={"transparent"}
										/>
										<Badge
											position="absolute"
											bottom={4}
											left={4}
											fontSize="xs"
											fontWeight="medium"
											color="rgba(white,0.9)"
											bg="rgba(0, 119, 255, 0.8)"
											backdropFilter="blur(4px)"
											borderRadius="full"
											px={3}
											py={1}
										>
											{project.type}
										</Badge>
									</Box>

									{/* Content */}
									<Box p={6}>
										<Heading
											as="h3"
											fontSize="xl"
											fontWeight="semibold"
											color={"#0D1B2A"}
											mb={4}
											fontFamily="poppins"
										>
											{project.title}
										</Heading>

										<Box gap={2}>
											{project.features.map(
												(feature, i) => (
													// <ListItem
													<Flex
														key={i}
														alignItems="center"
														// mb={4}
														fontSize="sm"
														color={"slate.600"}
														gap={2}
													>
														<CheckCircle
															// w={4}
															// h={4}
															size={4}
															color="#00C2CB"
															// flexShrink={0}
														/>
														{feature}
													</Flex>
												),
											)}
										</Box>
									</Box>
								</Box>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				{/* Note */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<Text
						textAlign="center"
						color={"slate.500"}
						fontSize="sm"
						mt={10}
						fontStyle="italic"
					>
						Note: Some projects are concept redesigns created to
						demonstrate what your business website can look like.
					</Text>
				</motion.div>
			</Container>
		</Box>
	);
}
