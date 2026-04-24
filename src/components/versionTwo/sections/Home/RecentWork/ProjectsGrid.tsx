"use client";
import {
	Box,
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
	Stack,
	Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "@/components/ui/motion";
import { CheckCircle, Eye, ExternalLink } from "lucide-react";
import { use } from "react";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const staggerContainer = {
	// initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const ProjectsGrid = ({
	projects,
}: {
	projects: Promise<any[] | any>;
}) => {
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

	const projectsData = use(projects);

	return (
		<motion.div
			variants={staggerContainer}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
		>
			<Grid
				templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
				// border={"solid red 1px"}
				gap={6}
				// gap={8}
				// flexWrap={"wrap"}
			>
				{projectsData.map((project: any, index: number) => (
					<motion.div
						key={index}
						variants={fadeInUp}
						className="h-full flex-1"
					>
						<Box
							// flex={1}
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
							transition="all 0.3s"
							_groupHover={{
								"& img": {
									transform: "scale(1.1)",
								},
							}}
							role="group"
						>
							{/* Image Container */}
							<Box position="relative" h={48} overflow="hidden">
								<Image
									src={project?.imageUrl}
									alt={project?.title}
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
									gradientFrom={"rgba(13, 27, 42, 0.7)"}
									gradientTo={"transparent"}
								/>

								<Box
									position="absolute"
									// bottom={4}
									top={4}
									left={4}
								>
									<Badge
										fontSize="xs"
										fontWeight="medium"
										color="white"
										bg="rgba(0, 119, 255, 0.8)"
										backdropFilter="blur(4px)"
										borderRadius="full"
										px={3}
										py={1}
										className=""
									>
										{project?.type}
									</Badge>
								</Box>
							</Box>

							{/* Content */}
							<VStack p={5} gap={0} h="full" align="stretch">
								<Heading
									as="h3"
									fontSize="lg"
									fontWeight="semibold"
									color="#0D1B2A"
									mb={3}
									fontFamily="poppins"
								>
									{project?.title}
								</Heading>
								<VStack
									gap={2}
									mb={5}
									// flex={1}
									align="stretch"
								>
									{(
										project?.features ??
										project?.highlights ??
										[]
									).map((feature: any, i: any) => (
										<Flex
											key={i}
											alignItems="flex-start"
											gap={2}
											fontSize="sm"
											color="slate.600"
										>
											<Box mt={0.5} flexShrink={0}>
												<CheckCircle
													className="w-4 h-4"
													style={{
														color: "#00C2CB",
													}}
												/>
											</Box>
											<Text>{feature}</Text>
										</Flex>
									))}
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
											className="!h-8 !rounded-md !px-3 !text-xs"
										>
											<Eye
												className="!w-4 h-4"
												style={{
													marginRight: "0.375rem",
												}}
											/>
											View Details
										</Button>
									</Link>

									{project.liveUrl ? (
										<ChakraLink
											href={project?.liveUrl}
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
												className="!h-8 !rounded-md !px-3 !text-xs"
											>
												<ExternalLink
													className="!w-4 !h-4"
													style={{
														marginRight: "0.375rem",
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
	);
};

import NextLink from "next/link";

export const ProjectsGrid2 = ({
	projects,
}: {
	projects: Promise<any[] | any>;
}) => {
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

	const projectsData = use(projects);

	return (
		<motion.div
			variants={staggerContainer}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
		>
			{" "}
			<Grid
				templateColumns={{
					base: "1fr",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap={8}
			>
				{projectsData.map((project: any) => (
					<motion.div
						key={project.id}
						variants={fadeInUp}
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Box
							bg="white"
							rounded="3xl"
							overflow="hidden"
							border="1px solid"
							borderColor="slate.200"
							boxShadow="sm"
							transition="all 0.3s"
							_hover={{ boxShadow: "xl" }}
							flex="1"
							display="flex"
							flexDirection="column"
						>
							<Box position="relative" h={52} overflow="hidden">
								<Image
									src={project?.imageUrl}
									alt={project?.title}
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
									bgGradient="linear(to-t, rgba(13,27,42,0.7), transparent)"
								/>
								<Flex
									position="absolute"
									top={4}
									left={4}
									gap={2}
								>
									{/* <Box
										bg={project.tagBg}
										color={project.tagColor}
										px={3}
										py={1.5}
										rounded="full"
										fontSize="xs"
										fontWeight="semibold"
									>
										{project.tag}
									</Box>{" "} */}
									<Box
										bg="whiteAlpha.900"
										color="#0D1B2A"
										px={3}
										py={1.5}
										rounded="full"
										fontSize="xs"
										fontWeight="medium"
									>
										{project.type}
									</Box>
								</Flex>
							</Box>

							<Box
								p={6}
								flex="1"
								display="flex"
								flexDirection="column"
							>
								<Heading
									as="h3"
									fontSize="xl"
									fontWeight="bold"
									color="#0D1B2A"
									mb={2}
									fontFamily="poppins"
								>
									{project.title}
								</Heading>
								<Text
									color="#4A5568"
									fontSize="sm"
									mb={5}
									lineHeight="tall"
									flex="1"
								>
									{project.description}
								</Text>

								<Stack gap={2} mb={6}>
									{project.features.map(
										(feature: string, index: string) => (
											<Flex
												key={index}
												align="flex-start"
												gap={2}
												color="#475569"
												fontSize="sm"
											>
												<Icon
													as={CheckCircle}
													boxSize={4}
													color="#00C2CB"
													mt={1}
												/>
												<Text>{feature}</Text>
											</Flex>
										),
									)}
								</Stack>

								<Flex
									gap={2}
									pt={4}
									borderTop="1px solid"
									borderColor="slate.100"
								>
									<ChakraLink
										as={NextLink}
										href={`/portfolio/${project.id}`}
										flex="1"
										_hover={{
											textDecoration: "none",
										}}
									>
										<Button
											variant="outline"
											size="sm"
											w="full"
											borderColor="#0077FF"
											color="#0077FF"
											_hover={{
												bg: "#0077FF80",
												color: "white",
											}}
										>
											<Eye className="w-4 h-4 mr-1.5" />
											Case Study
										</Button>
									</ChakraLink>
									{project.liveUrl ? (
										<ChakraLink
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											flex="1"
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
												<ExternalLink className="w-4 h-4 mr-1.5" />
												Live Site
											</Button>
										</ChakraLink>
									) : (
										<Button
											size="sm"
											variant="outline"
											color="slate.400"
											borderColor="slate.200"
											w="full"
											cursor="default"
											disabled
										>
											Concept
										</Button>
									)}
								</Flex>
							</Box>
						</Box>
					</motion.div>
				))}
			</Grid>
		</motion.div>
	);
};
