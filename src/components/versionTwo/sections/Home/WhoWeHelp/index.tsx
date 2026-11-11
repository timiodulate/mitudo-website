"use client";
import React from "react";
import NextLink from "next/link";
import { ArrowRight, Rocket, Settings2 } from "lucide-react";
import { Box, Flex, Grid, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { getServiceRoute } from "@/data/routes";
import { getService } from "@/data/services";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import SectionIntro from "@/components/versionTwo/shared/SectionIntro";

const paths = [
	{
		icon: Rocket,
		label: "Just starting?",
		title: "Start with everything in place",
		text: "Register the right kind of business, get a brand and website that look established, and show up on Google and WhatsApp from day one. Done once, done properly.",
		services: ["business-name-registration", "full-brand-identity", "business-website", "google-business-profile-setup"],
		accent: "#0077FF",
	},
	{
		icon: Settings2,
		label: "Already running?",
		title: "Take the busywork off your desk",
		text: "Fix what's patchy online, keep CAC filings and renewals on time, and replace the spreadsheets and notebooks with a system built around how you work.",
		services: ["annual-returns", "custom-software-development", "online-store", "maintenance-support"],
		accent: "#00C2CB",
	},
];

export default function WhoWeHelp() {
	return (
		<Box as="section" id="who-we-help" py={{ base: 20, md: 28 }} bg="#F5F7FA">
			<SectionContainer>
				<SectionIntro
					eyebrow="Who we help"
					title="Your time belongs to your customers"
					intro="Delivering your product or service, and finding people to sell it to: that's the work only you can do. The rest, a lot of which AI makes look easy, we do for you."
				/>

				<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
					{paths.map((path) => (
						<Flex
							key={path.label}
							direction="column"
							bg="white"
							borderRadius="3xl"
							p={{ base: 7, md: 9 }}
							border="1px solid"
							borderColor="slate.200"
							borderTop="4px solid"
							borderTopColor={path.accent}
						>
							<Flex align="center" gap={3} mb={4}>
								<Flex w={10} h={10} borderRadius="xl" align="center" justify="center" bg={`${path.accent}1A`} color={path.accent}>
									<path.icon size={20} />
								</Flex>
								<Text fontSize="sm" fontWeight="semibold" color={path.accent} textTransform="uppercase" letterSpacing="wide">
									{path.label}
								</Text>
							</Flex>
							<Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontFamily="poppins" color="#0D1B2A" mb={3}>
								{path.title}
							</Heading>
							<Text color="#4A5568" lineHeight="tall" mb={6}>
								{path.text}
							</Text>
							<Flex wrap="wrap" gap={2} mt="auto">
								{path.services.map((slug) => {
									const service = getService(slug);
									if (!service) return null;
									return (
										<ChakraLink
											key={slug}
											as={NextLink}
											href={getServiceRoute(slug)}
											display="inline-flex"
											alignItems="center"
											gap={1}
											px={3}
											py={1.5}
											borderRadius="full"
											bg="#F5F7FA"
											border="1px solid"
											borderColor="slate.200"
											fontSize="xs"
											fontWeight="medium"
											color="#0D1B2A"
											_hover={{ borderColor: path.accent, color: path.accent, textDecoration: "none" }}
										>
											{service.name.replace(/ \(.*\)$/, "")}
											<ArrowRight size={12} />
										</ChakraLink>
									);
								})}
							</Flex>
						</Flex>
					))}
				</Grid>
			</SectionContainer>
		</Box>
	);
}
