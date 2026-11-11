"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Flex, Grid, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ArrowRight, FolderKey, Hourglass, Layers, MessagesSquare } from "lucide-react";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import PageHero from "../../shared/PageHero";
import ContactCTA from "../../shared/ContactCTA";
import { ROUTES } from "@/data/routes";
import { services } from "@/data/services";
import SectionContainer from "@/components/versionTwo/shared/SectionContainer";

const questions = [
	{
		q: "If someone searches for your business, do they find anything?",
		a: "Not a personal Instagram or a blurry logo in a WhatsApp group: a real, professional presence that says this business exists.",
	},
	{
		q: "If they find you, is it good enough to trust?",
		a: "Clear, consistent information, presented well enough that a customer feels confident reaching out before you've even spoken.",
	},
];

const beliefs = [
	{
		icon: Hourglass,
		title: "Your time belongs to your customers",
		text: "Delivering and selling are the jobs only you can do. Registration, design, setup, filings and systems can be handed over.",
	},
	{
		icon: Layers,
		title: "Done once, done properly",
		text: "Setting something up right the first time costs less than fixing it later, in money and in customers lost along the way.",
	},
	{
		icon: FolderKey,
		title: "You own what we build",
		text: "Every file, login and document is in your name and handed over in one organised folder, whether or not you stay with us.",
	},
	{
		icon: MessagesSquare,
		title: "Plain words, clear quotes",
		text: "You'll always know what's included, what it costs and how long it takes before you pay anything.",
	},
];

const serviceCount = services.filter((service) => service.kind !== "package").length;

const facts = [
	{ value: "2021", label: "Building websites and software since" },
	{ value: "BN 8447100", label: "Registered with the CAC as Mitudo Tech Solutions" },
	{ value: `${serviceCount}`, label: "Services, from one team" },
	{ value: "Nationwide", label: "Based in Ogun State, working with clients across Nigeria" },
];

export default function AboutView() {
	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			<PageHero
				eyebrow="About Us"
				title={
					<>
						We handle the work behind your business,
						<br />
						<Box as="span" color="#00C2CB">
							so you can focus on running it.
						</Box>
					</>
				}
				intro="Mitudo Agency helps Nigerian businesses, organisations and personal brands get set up right, stand out and run smoothly, whether they're just starting or have been running for years."
			/>

			{/* Story */}
			<Box as="section" py={{ base: 16, md: 24 }} bg="white">
				<SectionContainer narrow>
					<Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="poppins" color="#0D1B2A" mb={6}>
						Our story
					</Heading>
					<Text color="#4A5568" lineHeight="tall" mb={4}>
						Mitudo started in 2021, building websites and software for whoever
						needed them. Along the way we kept seeing the same thing: excellent
						businesses that looked unfinished online, and owners who spent their
						evenings on things that weren't their business. Search for them and
						you&apos;d find a blurry logo, a personal Gmail on the business card and
						an Instagram page with no bio. Look inside and you&apos;d find orders in
						notebooks, a CAC annual return nobody remembered, and a domain about
						to expire.
					</Text>
					<Text color="#4A5568" lineHeight="tall" mb={4}>
						These aren&apos;t bad businesses. Many are great at what they do. But
						every hour spent on setup, paperwork and admin is an hour not spent
						delivering or selling, and in a market where customers check you out
						before they reach out, looking unfinished loses them to competitors who
						simply look more established.
					</Text>
					<Text color="#4A5568" lineHeight="tall">
						So in 2026 we relaunched to take all of that off your plate, in one
						place: registration and compliance, brand and website, Google and
						social media, and the custom tools that keep things running. For
						businesses just starting, and for those that have been running for
						years. We built our own brand the same way we build yours.
					</Text>
				</SectionContainer>
			</Box>

			{/* Facts */}
			<Box as="section" bg="#0D1B2A" py={{ base: 12, md: 14 }}>
				<SectionContainer>
					<Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
						{facts.map((fact) => (
							<Box key={fact.label}>
								<Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" fontFamily="poppins" color="#00C2CB">
									{fact.value}
								</Text>
								<Text fontSize="sm" color="whiteAlpha.800" mt={1}>
									{fact.label}
								</Text>
							</Box>
						))}
					</Grid>
				</SectionContainer>
			</Box>

			{/* What we believe */}
			<Box as="section" py={{ base: 16, md: 24 }} bg="#F5F7FA">
				<SectionContainer>
					<Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="poppins" color="#0D1B2A" mb={8}>
						What we believe
					</Heading>
					<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
						{beliefs.map((belief) => (
							<Flex key={belief.title} gap={4} bg="white" borderRadius="2xl" p={6} border="1px solid" borderColor="slate.200">
								<Flex align="center" justify="center" flexShrink={0} w={11} h={11} borderRadius="xl" bg="rgba(0, 119, 255, 0.1)" color="#0077FF">
									<belief.icon size={20} />
								</Flex>
								<Box>
									<Heading as="h3" fontSize="lg" fontFamily="poppins" color="#0D1B2A" mb={2}>
										{belief.title}
									</Heading>
									<Text color="#4A5568" fontSize="sm" lineHeight="tall">
										{belief.text}
									</Text>
								</Box>
							</Flex>
						))}
					</Grid>
				</SectionContainer>
			</Box>

			{/* Two questions */}
			<Box as="section" py={{ base: 16, md: 24 }} bg="white">
				<SectionContainer>
					<Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="poppins" color="#0D1B2A" mb={4}>
						Two questions before any marketing
					</Heading>
					<Text color="#4A5568" lineHeight="tall" mb={8} maxW="3xl">
						Ads, content and social media all help you sell. But before any of it
						works, two answers need to be yes. Otherwise you&apos;re sending people to
						a front door that doesn&apos;t exist, or one that doesn&apos;t look safe to
						walk through.
					</Text>
					<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
						{questions.map((item, index) => (
							<Box key={item.q} bg="#F5F7FA" borderRadius="2xl" p={7} border="1px solid" borderColor="slate.200">
								<Text fontSize="4xl" fontWeight="bold" fontFamily="poppins" color="#0077FF" opacity={0.3}>
									0{index + 1}
								</Text>
								<Heading as="h3" fontSize="lg" fontFamily="poppins" color="#0D1B2A" mt={2} mb={3}>
									{item.q}
								</Heading>
								<Text color="#4A5568" fontSize="sm" lineHeight="tall">
									{item.a}
								</Text>
							</Box>
						))}
					</Grid>

					<Flex
						mt={12}
						pt={8}
						borderTop="1px solid"
						borderColor="slate.200"
						justify="space-between"
						align={{ base: "flex-start", md: "center" }}
						direction={{ base: "column", md: "row" }}
						gap={4}
					>
						<Text color="#4A5568">
							From CAC registration to custom software: see everything we do, and
							what&apos;s included in each.
						</Text>
						<ChakraLink
							as={NextLink}
							href={ROUTES.services}
							color="#0077FF"
							fontWeight="semibold"
							display="inline-flex"
							alignItems="center"
							gap={2}
							flexShrink={0}
							_hover={{ color: "#0066DD", textDecoration: "none" }}
						>
							See our services <ArrowRight size={16} />
						</ChakraLink>
					</Flex>
				</SectionContainer>
			</Box>

			<ContactCTA />

			<Footer />
		</Box>
	);
}
