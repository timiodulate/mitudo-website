"use client";
import React from "react";
import NextLink from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Box, Button, Flex, Grid, Heading, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { getServiceRoute, ROUTES } from "@/data/routes";
import { getCategoriesByStage, stages } from "@/data/services";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import SectionIntro from "@/components/versionTwo/shared/SectionIntro";

const stageColor: Record<string, string> = {
	"set-up": "#0077FF",
	"stand-out": "#00A6AE",
	run: "#0D1B2A",
};

/** The service groups, by stage. Shared by the homepage and anywhere else that shows them. */
export function ServicesByStage() {
	const start = stages[0];
	return (
		<>
			<Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
				{stages.slice(1).map((stage, index) => (
					<Flex key={stage.id} direction="column" bg="#F5F7FA" borderRadius="3xl" p={{ base: 6, md: 7 }} border="1px solid" borderColor="slate.200">
						<Text fontSize="5xl" fontWeight="bold" fontFamily="poppins" color={stageColor[stage.id]} opacity={0.25} lineHeight="1">
							0{index + 1}
						</Text>
						<Heading as="h3" fontSize="2xl" fontFamily="poppins" color={stageColor[stage.id]} mt={3}>
							{stage.title}
						</Heading>
						<Text color="#4A5568" fontSize="sm" lineHeight="tall" mt={2} mb={6}>
							{stage.blurb}
						</Text>
						<Stack gap={3} mt="auto">
							{getCategoriesByStage(stage.id).map((category) => (
								<ChakraLink
									key={category.id}
									as={NextLink}
									href={`${ROUTES.services}#${category.id}`}
									display="block"
									bg="white"
									borderRadius="xl"
									p={4}
									border="1px solid"
									borderColor="slate.200"
									transition="all 0.2s"
									_hover={{ borderColor: stageColor[stage.id], boxShadow: "md", textDecoration: "none" }}
								>
									<Flex justify="space-between" align="center" gap={3}>
										<Text fontWeight="semibold" fontSize="sm" color="#0D1B2A">
											{category.title}
										</Text>
										<Box flexShrink={0} color={stageColor[stage.id]}>
											<ArrowRight size={14} />
										</Box>
									</Flex>
									<Text fontSize="xs" color="#4A5568" mt={1} lineHeight="tall">
										{category.blurb}
									</Text>
								</ChakraLink>
							))}
						</Stack>
					</Flex>
				))}
			</Grid>

			<Flex
				mt={6}
				p={{ base: 5, md: 6 }}
				gap={4}
				align={{ base: "flex-start", md: "center" }}
				direction={{ base: "column", md: "row" }}
				bg="rgba(0, 119, 255, 0.06)"
				border="1px solid"
				borderColor="rgba(0, 119, 255, 0.2)"
				borderRadius="2xl"
			>
				<Flex flexShrink={0} w={10} h={10} borderRadius="xl" bg="#0077FF" color="white" align="center" justify="center">
					<Compass size={20} />
				</Flex>
				<Box flex={1}>
					<Text fontWeight="semibold" color="#0D1B2A">
						Not sure where to start?
					</Text>
					<Text fontSize="sm" color="#4A5568">
						{start.blurb} An Online Presence Audit shows what to fix first, and its fee comes off any service you go ahead with.
					</Text>
				</Box>
				<ChakraLink
					as={NextLink}
					href={getServiceRoute("online-presence-audit")}
					color="#0077FF"
					fontWeight="semibold"
					fontSize="sm"
					display="inline-flex"
					alignItems="center"
					gap={1}
					flexShrink={0}
					_hover={{ color: "#0066DD", textDecoration: "none" }}
				>
					About the audit <ArrowRight size={14} />
				</ChakraLink>
			</Flex>
		</>
	);
}

export default function Services() {
	return (
		<Box as="section" id="services" py={{ base: 20, md: 28 }} bg="white">
			<SectionContainer>
				<SectionIntro
					eyebrow="What we do"
					title="Everything your business needs, from one team"
					intro="Pick one service or several. Each group has its own page with what's included, what we need from you, and how you pay."
				/>

				<ServicesByStage />

				<Flex justify="center" mt={12}>
					<ChakraLink as={NextLink} href={ROUTES.services} _hover={{ textDecoration: "none" }}>
						<Button size="lg" bg="#0077FF" color="white" borderRadius="full" px={8} _hover={{ bg: "#0066DD" }}>
							See all services
							<ArrowRight size={16} />
						</Button>
					</ChakraLink>
				</Flex>

				<Text textAlign="center" color="#4A5568" fontSize="sm" mt={6}>
					<Text as="span" fontWeight="semibold" color="#0D1B2A">
						Bundle & save:
					</Text>{" "}
					buy 3 or more services together and get 10 to 15% off. A package counts as one service.
				</Text>
			</SectionContainer>
		</Box>
	);
}
