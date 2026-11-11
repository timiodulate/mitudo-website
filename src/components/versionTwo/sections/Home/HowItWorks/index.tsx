"use client";
import React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { ClipboardCheck, FileText, FolderCheck, Search } from "lucide-react";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";
import SectionIntro from "@/components/versionTwo/shared/SectionIntro";

const steps = [
	{
		icon: Search,
		title: "Find what's missing",
		text: "A short chat if you already know what you need, or an Online Presence Audit if you'd like us to look first.",
	},
	{
		icon: FileText,
		title: "Write your business down",
		text: "Every engagement starts with Brand Documentation, free: what you do, who you serve, and every decision we make.",
	},
	{
		icon: ClipboardCheck,
		title: "Do the work, properly",
		text: "We deliver what you chose, one service at a time or as a package, and check every piece before it reaches you.",
	},
	{
		icon: FolderCheck,
		title: "Hand it all over",
		text: "Every file, login and document in one organised folder that's yours to keep. We stay around for renewals and support.",
	},
];

export default function HowItWorks() {
	return (
		<Box as="section" id="how-we-work" py={{ base: 20, md: 28 }} bg="#F5F7FA">
			<SectionContainer>
				<SectionIntro
					eyebrow="How we work"
					title="Four steps, no surprises"
					intro="You always know what's happening, what it costs and what you'll get before we start."
				/>
				<Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
					{steps.map((step, index) => (
						<Box key={step.title} position="relative" bg="white" borderRadius="2xl" p={6} border="1px solid" borderColor="slate.200">
							<Text position="absolute" top={5} right={6} fontSize="3xl" fontWeight="bold" fontFamily="poppins" color="#0077FF" opacity={0.15}>
								0{index + 1}
							</Text>
							<Box color="#00C2CB" mb={4}>
								<step.icon size={24} />
							</Box>
							<Heading as="h3" fontSize="md" fontFamily="poppins" color="#0D1B2A" mb={2}>
								{step.title}
							</Heading>
							<Text color="#4A5568" fontSize="sm" lineHeight="tall">
								{step.text}
							</Text>
						</Box>
					))}
				</Grid>
			</SectionContainer>
		</Box>
	);
}
