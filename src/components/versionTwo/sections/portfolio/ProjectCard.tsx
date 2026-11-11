"use client";
import React, { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { CheckCircle, ExternalLink, Eye } from "lucide-react";
import { Box, Button, Flex, Heading, Icon, Image, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { CONCEPT_CLIENT, type PortfolioProject } from "@/data/portfolio";
import { getService } from "@/data/services";
import { getServiceRoute } from "@/data/routes";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
	const concept = project.client === CONCEPT_CLIENT;
	const [imageFailed, setImageFailed] = useState(false);
	const imageRef = useRef<HTMLImageElement>(null);

	// An image that fails before hydration never fires onError, so check once mounted.
	useEffect(() => {
		const image = imageRef.current;
		if (image?.complete && image.naturalWidth === 0) setImageFailed(true);
	}, []);
	return (
		<Flex
			direction="column"
			h="full"
			bg="white"
			rounded="3xl"
			overflow="hidden"
			border="1px solid"
			borderColor="slate.200"
			boxShadow="sm"
			transition="all 0.3s"
			_hover={{ boxShadow: "xl" }}
		>
			<Box position="relative" h={52} overflow="hidden" bg="slate.100">
				{project.imageUrl && !imageFailed && (
					<Image
						src={project.imageUrl}
						alt={project.title}
						w="full"
						h="full"
						objectFit="cover"
						ref={imageRef}
						onError={() => setImageFailed(true)}
					/>
				)}
				<Flex position="absolute" top={4} left={4} gap={2}>
					{project.type && (
						<Box bg="whiteAlpha.900" color="#0D1B2A" px={3} py={1.5} rounded="full" fontSize="xs" fontWeight="medium">
							{project.type}
						</Box>
					)}
					{concept && (
						<Box bg="#0077FF" color="white" px={3} py={1.5} rounded="full" fontSize="xs" fontWeight="medium">
							Concept
						</Box>
					)}
				</Flex>
			</Box>

			<Flex direction="column" flex="1" p={6}>
				{!concept && (
					<Text fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" color="#00A6AE" mb={1}>
						{project.client}
					</Text>
				)}
				<Heading as="h3" fontSize="xl" fontWeight="bold" color="#0D1B2A" mb={2} fontFamily="poppins">
					{project.title}
				</Heading>
				<Text color="#4A5568" fontSize="sm" mb={5} lineHeight="tall">
					{project.description}
				</Text>

				{project.features.length > 0 && (
					<Stack gap={2} mb={5}>
						{project.features.map((feature) => (
							<Flex key={feature} align="flex-start" gap={2} color="#475569" fontSize="sm">
								<Icon as={CheckCircle} boxSize={4} color="#00C2CB" mt={0.5} />
								<Text>{feature}</Text>
							</Flex>
						))}
					</Stack>
				)}

				{project.services.length > 0 && (
					<Flex wrap="wrap" gap={2} mb={6} mt="auto">
						{project.services.map((slug) => {
							const service = getService(slug);
							if (!service) return null;
							return (
								<ChakraLink
									key={slug}
									as={NextLink}
									href={getServiceRoute(slug)}
									px={2.5}
									py={1}
									rounded="full"
									bg="rgba(0, 119, 255, 0.08)"
									color="#0077FF"
									fontSize="xs"
									fontWeight="medium"
									_hover={{ bg: "rgba(0, 119, 255, 0.15)", textDecoration: "none" }}
								>
									{service.name}
								</ChakraLink>
							);
						})}
					</Flex>
				)}

				<Flex gap={2} pt={4} borderTop="1px solid" borderColor="slate.100" mt={project.services.length > 0 ? 0 : "auto"}>
					<ChakraLink as={NextLink} href={`/portfolio/${project.id}`} flex="1" _hover={{ textDecoration: "none" }}>
						<Button variant="outline" size="sm" w="full" borderColor="#0077FF" color="#0077FF" _hover={{ bg: "rgba(0, 119, 255, 0.08)" }}>
							<Eye className="w-4 h-4 mr-1.5" />
							Case Study
						</Button>
					</ChakraLink>
					{project.liveUrl ? (
						<ChakraLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" flex="1" _hover={{ textDecoration: "none" }}>
							<Button size="sm" w="full" bg="#0077FF" color="white" _hover={{ bg: "#0066DD" }}>
								<ExternalLink className="w-4 h-4 mr-1.5" />
								Live Site
							</Button>
						</ChakraLink>
					) : (
						<Button size="sm" flex="1" variant="outline" color="slate.400" borderColor="slate.200" cursor="default" disabled>
							Concept
						</Button>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
}
