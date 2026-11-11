"use client";
import React from "react";
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";
import { Clock, RefreshCcw, BadgeCheck, Layers } from "lucide-react";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import SectionIntro from "@/components/versionTwo/shared/SectionIntro";

const reasons = [
	{
		icon: Clock,
		title: "No time spent learning",
		text: "CAC portals, DNS settings, Google verification, design tools: each has its own rules and quirks. We already know them, so you don't spend evenings figuring them out.",
	},
	{
		icon: RefreshCcw,
		title: "No trial and error",
		text: "Emails landing in spam, a Google profile stuck in verification, a filing rejected, a logo that blurs on a signboard. We've seen the mistakes, so we avoid them.",
	},
	{
		icon: BadgeCheck,
		title: "Done properly",
		text: "AI can give you a draft. We know what \"done right\" looks like, and we check every piece before it reaches you.",
	},
	{
		icon: Layers,
		title: "Everything fits together",
		text: "Your registration, brand, website, email, Google listing, social profiles and systems all say the same thing, because one team set them up.",
	},
];

/** The AI question, on the homepage's dark band. */
export default function WhyUs() {
	return (
		<Box as="section" id="why-us" py={{ base: 20, md: 28 }} bg="#0D1B2A" position="relative" overflow="hidden">
			<Box
				position="absolute"
				top="-120px"
				right="-120px"
				w="420px"
				h="420px"
				bg="#0077FF"
				opacity={0.18}
				borderRadius="full"
				filter="blur(120px)"
				pointerEvents="none"
			/>
			<SectionContainer>
				<SectionIntro
					dark
					eyebrow="Why Mitudo"
					title="Yes, you could do it yourself with AI."
					intro="AI has made a lot of this easier to attempt. But every hour spent learning it is an hour not spent delivering or selling. We're the professionals who do it for you, quickly and properly."
				/>

				<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
					{reasons.map((reason) => (
						<Flex
							key={reason.title}
							gap={4}
							bg="whiteAlpha.50"
							borderRadius="2xl"
							p={6}
							border="1px solid"
							borderColor="whiteAlpha.200"
						>
							<Flex
								align="center"
								justify="center"
								flexShrink={0}
								w={11}
								h={11}
								borderRadius="xl"
								bg="rgba(0, 194, 203, 0.15)"
								color="#00C2CB"
							>
								<reason.icon size={20} />
							</Flex>
							<Box>
								<Heading as="h3" fontSize="lg" color="white" fontFamily="poppins" mb={2}>
									{reason.title}
								</Heading>
								<Text color="whiteAlpha.800" fontSize="sm" lineHeight="tall">
									{reason.text}
								</Text>
							</Box>
						</Flex>
					))}
				</Grid>
			</SectionContainer>
		</Box>
	);
}
