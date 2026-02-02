"use client";
import React from "react";
import Link from "next/link";
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
	Button,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { CheckCircle, Eye, ExternalLink } from "lucide-react";

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
			id: "dglides-apartments",
			title: "D'Glides Apartments",
			type: "Real Estate Business Website",
			features: [
				"Professional property showcase",
				"Trust-building design",
				"Direct enquiry options",
				"Mobile & desktop optimized",
			],
			image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
			liveUrl: "https://dglidestcl.com",
		},
		{
			id: "school-training-center",
			title: "School / Training Center",
			type: "Business Website",
			features: [
				"Homepage + About + Programs",
				"Easy navigation for parents/students",
				"Professional layout",
				"Enrollment enquiry forms",
			],
			image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
			liveUrl: null,
		},
		{
			id: "logistics-real-estate",
			title: "Logistics / Real Estate",
			type: "Concept Design",
			features: [
				"Modern business layout",
				"Strong credibility focus",
				"Clear call-to-action",
				"Responsive design",
			],
			image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
			liveUrl: null,
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
							<motion.div
								key={index}
								variants={fadeInUp}
								className="h-full"
							>
								<Box
									bg={cardBg}
									backgroundColor={"white"}
									borderRadius="2xl"
									overflow="hidden"
									h="full"
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
									<VStack
										p={5}
										gap={0}
										h="full"
										align="stretch"
									>
										<Heading
											as="h3"
											fontSize="lg"
											fontWeight="semibold"
											color="#0D1B2A"
											mb={3}
											fontFamily="poppins"
										>
											{project.title}
										</Heading>
										<VStack
											gap={2}
											mb={5}
											// flex={1}
											align="stretch"
										>
											{project.features.map(
												(feature, i) => (
													<Flex
														key={i}
														alignItems="flex-start"
														gap={2}
														fontSize="sm"
														color="slate.600"
													>
														<Box
															mt={0.5}
															flexShrink={0}
														>
															<CheckCircle
																className="w-4 h-4"
																style={{
																	color: "#00C2CB",
																}}
															/>
														</Box>
														<Text>{feature}</Text>
													</Flex>
												),
											)}
										</VStack>

										<Flex
											gap={2}
											pt={4}
											borderStyle={"solid"}
											borderTop="1px"
											borderTopColor="slate.100"
										>
											<Link
												href={`/project-details/${project.id}`}
											>
												<Button
													variant="outline"
													size="sm"
													w="full"
													color="#0077FF"
													borderWidth="1px"
													borderColor="rgba(0, 119, 255, 0.3)"
													_hover={{
														bg: "rgba(0, 119, 255, 0.1)",
														borderColor:
															"rgba(0, 119, 255, 0.5)",
													}}
												>
													<Eye
														className="w-4 h-4"
														style={{
															marginRight:
																"0.375rem",
														}}
													/>
													View Details
												</Button>
											</Link>

											{project.liveUrl ? (
												<ChakraLink
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													flex={1}
													_hover={{
														textDecoration: "none",
													}}
												>
													<Button
														size="sm"
														w="full"
														bg="#0077FF"
														color="white"
														_hover={{
															bg: "#0066DD",
														}}
													>
														<ExternalLink
															className="w-4 h-4"
															style={{
																marginRight:
																	"0.375rem",
															}}
														/>
														Live Demo
													</Button>
												</ChakraLink>
											) : (
												<Button
													size="sm"
													flex={1}
													variant="outline"
													color="slate.400"
													borderColor="slate.200"
													disabled
												>
													Concept
												</Button>
											)}
										</Flex>
									</VStack>
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
