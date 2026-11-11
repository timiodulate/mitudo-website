"use client";
import React from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import PageHero from "../../shared/PageHero";
import WhyUs from "../../shared/WhyUs";
import ContactCTA from "../../shared/ContactCTA";
import { getServiceRoute, ROUTES } from "@/data/routes";
import { serviceCategories, getServicesByCategory } from "@/data/services";

const questions = [
	{
		q: "If someone searches for your business, do they find anything?",
		a: "Not a personal Instagram or a blurry logo in a WhatsApp group: a real, professional presence that says this business exists.",
	},
	{
		q: "If they find you, is it good enough to trust?",
		a: "Enough clear, consistent information, presented well enough that a potential customer feels confident reaching out before you've even spoken.",
	},
];

const steps = [
	{
		title: "Find what's missing",
		text: "We start with an Online Presence Audit, or a short chat if you already know what you need.",
	},
	{
		title: "Write your business down",
		text: "Every engagement starts with Brand Documentation, free: what you do, who you serve, and every decision we make.",
	},
	{
		title: "Set it up, properly",
		text: "We deliver the services you choose, one at a time or as a package, checking every piece before it reaches you.",
	},
	{
		title: "Hand it all over",
		text: "You get every file, login and document in one organised folder that's yours to keep. We stay around for renewals and support.",
	},
];

export default function AboutView() {
	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			<PageHero
				eyebrow="About Us"
				title={
					<>
						We set businesses up right,
						<br />
						<Box as="span" color="#00C2CB">
							so they look legit and get found.
						</Box>
					</>
				}
				intro="Mitudo Agency helps Nigerian businesses, organisations and professionals build a proper foundation online: registered, branded, findable and trusted."
			/>

			{/* Story */}
			<Box as="section" py={{ base: 16, md: 24 }} bg="white">
				<Container maxW="4xl" px={{ base: 6, md: 8 }}>
					<Heading
						as="h2"
						fontSize={{ base: "2xl", md: "3xl" }}
						fontFamily="poppins"
						color="#0D1B2A"
						mb={6}
					>
						Our story
					</Heading>
					<Text color="#4A5568" lineHeight="tall" mb={4}>
						Mitudo started in 2021, building websites and software
						for whoever needed them. Along the way we kept seeing the
						same thing: excellent businesses that looked unfinished
						online. Search for them and you'd find nothing, or a
						blurry logo, a personal Gmail on the business card, and
						an Instagram page with no bio.
					</Text>
					<Text color="#4A5568" lineHeight="tall" mb={4}>
						These aren't bad businesses. Many are great at what they
						do. They just don't look the part, and in a market where
						customers check you out before they reach out, that means
						losing them to competitors who simply look more
						established.
					</Text>
					<Text color="#4A5568" lineHeight="tall">
						So in 2026 we relaunched with one focus: help businesses
						get set up right, look legit and get found. We're
						registered with the CAC as Mitudo Tech Solutions (BN
						8447100), and we built our own brand the same way we
						build yours.
					</Text>
				</Container>
			</Box>

			{/* What we believe */}
			<Box as="section" py={{ base: 16, md: 24 }} bg="#F5F7FA">
				<Container maxW="5xl" px={{ base: 6, md: 8 }}>
					<Heading
						as="h2"
						fontSize={{ base: "2xl", md: "3xl" }}
						fontFamily="poppins"
						color="#0D1B2A"
						mb={4}
					>
						Two questions before any marketing
					</Heading>
					<Text color="#4A5568" lineHeight="tall" mb={8} maxW="3xl">
						Ads, content and social media all help you sell. But
						before any of it works, two answers need to be yes.
						Otherwise you're sending people to a front door that
						doesn't exist, or one that doesn't look safe to walk
						through.
					</Text>
					<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
						{questions.map((item, index) => (
							<Box
								key={item.q}
								bg="white"
								borderRadius="2xl"
								p={7}
								border="1px solid"
								borderColor="slate.200"
							>
								<Text
									fontSize="4xl"
									fontWeight="bold"
									fontFamily="poppins"
									color="#0077FF"
									opacity={0.3}
								>
									0{index + 1}
								</Text>
								<Heading
									as="h3"
									fontSize="lg"
									fontFamily="poppins"
									color="#0D1B2A"
									mt={2}
									mb={3}
								>
									{item.q}
								</Heading>
								<Text color="#4A5568" fontSize="sm" lineHeight="tall">
									{item.a}
								</Text>
							</Box>
						))}
					</Grid>
				</Container>
			</Box>

			{/* The AI angle */}
			<WhyUs bg="white" showLink={false} />

			{/* How we work */}
			<Box as="section" py={{ base: 16, md: 24 }} bg="#F5F7FA">
				<Container maxW="5xl" px={{ base: 6, md: 8 }}>
					<Heading
						as="h2"
						fontSize={{ base: "2xl", md: "3xl" }}
						fontFamily="poppins"
						color="#0D1B2A"
						mb={8}
					>
						How we work
					</Heading>
					<Grid
						templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
						gap={6}
					>
						{steps.map((step, index) => (
							<Box
								key={step.title}
								bg="white"
								borderRadius="2xl"
								p={6}
								border="1px solid"
								borderColor="slate.200"
							>
								<Text fontSize="sm" fontWeight="bold" color="#00C2CB">
									Step {index + 1}
								</Text>
								<Heading
									as="h3"
									fontSize="md"
									fontFamily="poppins"
									color="#0D1B2A"
									mt={2}
									mb={2}
								>
									{step.title}
								</Heading>
								<Text color="#4A5568" fontSize="sm" lineHeight="tall">
									{step.text}
								</Text>
							</Box>
						))}
					</Grid>
				</Container>
			</Box>

			{/* Services */}
			<Box as="section" id="services" py={{ base: 16, md: 24 }} bg="white">
				<Container maxW="5xl" px={{ base: 6, md: 8 }}>
					<Text
						fontSize="sm"
						fontWeight="medium"
						letterSpacing="wider"
						textTransform="uppercase"
						color="#0077FF"
					>
						What we do
					</Text>
					<Heading
						as="h2"
						fontSize={{ base: "2xl", md: "3xl" }}
						fontFamily="poppins"
						color="#0D1B2A"
						mt={3}
						mb={8}
					>
						Everything a business needs to be set up right
					</Heading>
					<Grid
						templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
						gap={4}
					>
						{serviceCategories.map((category) => {
							const first = getServicesByCategory(category.id)[0];
							return (
								<ChakraLink
									key={category.id}
									as={NextLink}
									href={`${ROUTES.services}#${category.id}`}
									display="block"
									_hover={{ textDecoration: "none" }}
								>
									<Box
										h="full"
										bg="#F5F7FA"
										borderRadius="2xl"
										p={5}
										border="1px solid"
										borderColor="slate.200"
										transition="all 0.25s"
										_hover={{ borderColor: "#0077FF", boxShadow: "md" }}
									>
										<Heading
											as="h3"
											fontSize="md"
											fontFamily="poppins"
											color="#0D1B2A"
											mb={2}
										>
											{category.title}
										</Heading>
										<Text color="#4A5568" fontSize="sm">
											{category.blurb}
										</Text>
										{first && (
											<Text
												as="span"
												display="block"
												fontSize="xs"
												color="#0077FF"
												mt={3}
											>
												e.g. {first.name}
											</Text>
										)}
									</Box>
								</ChakraLink>
							);
						})}
					</Grid>
					<Flex justify="center" mt={10}>
						<ChakraLink as={NextLink} href={ROUTES.services} _hover={{ textDecoration: "none" }}>
							<Button
								size="lg"
								bg="#0077FF"
								color="white"
								borderRadius="full"
								px={8}
								_hover={{ bg: "#0066DD" }}
							>
								See all services
								<ArrowRight size={16} />
							</Button>
						</ChakraLink>
					</Flex>
					<Text textAlign="center" fontSize="sm" color="#4A5568" mt={4}>
						Not sure where to start?{" "}
						<ChakraLink
							as={NextLink}
							href={getServiceRoute("online-presence-audit")}
							color="#0077FF"
						>
							Begin with an audit
						</ChakraLink>
						.
					</Text>
				</Container>
			</Box>

			<ContactCTA />

			<Footer />
		</Box>
	);
}
