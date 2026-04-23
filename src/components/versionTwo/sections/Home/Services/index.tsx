"use client";

import React from "react";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	Flex,
	Button,
} from "@chakra-ui/react";
import {
	Globe,
	Search,
	Award,
	Mail,
	Users,
	Shield,
	ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
	{
		icon: Globe,
		title: "Professional Website",
		price: "₦150K – ₦400K",
		description:
			"A clean, fast, SEO-ready website that makes your business look real and credible. Built to work on every device.",
		bg: "rgba(0, 119, 255, 0.1)",
		iconColor: "#0077FF",
	},
	{
		icon: Search,
		title: "Google Business Profile",
		price: "₦30K – ₦60K",
		description:
			"Show up when people search for what you do. We set up and optimise your Google Business listing.",
		bg: "rgba(0, 194, 203, 0.1)",
		iconColor: "#00C2CB",
	},
	{
		icon: Award,
		title: "Brand Identity",
		price: "₦100K – ₦250K",
		description:
			"Logo, brand colours, and a visual identity that makes your business look like it belongs. Not generic, not templated.",
		bg: "rgba(0, 119, 255, 0.1)",
		iconColor: "#0077FF",
	},
	{
		icon: Mail,
		title: "Domain & Professional Email",
		price: "₦30K – ₦50K",
		description:
			"Stop using Gmail for business. Get a professional email like you@yourbusiness.com and the matching domain.",
		bg: "rgba(0, 194, 203, 0.1)",
		iconColor: "#00C2CB",
	},
	{
		icon: Users,
		title: "Social Media Setup",
		price: "₦20K – ₦40K",
		description:
			"Claim your handles, set up profiles, and make your social presence look professional and consistent.",
		bg: "rgba(0, 119, 255, 0.1)",
		iconColor: "#0077FF",
	},
	{
		icon: Shield,
		title: "Business Registration",
		price: "₦30K – ₦60K",
		description:
			"Get your business registered with CAC so clients know you're legitimate. We handle the process for you.",
		bg: "rgba(0, 194, 203, 0.1)",
		iconColor: "#00C2CB",
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const staggerContainer = {
	animate: { transition: { staggerChildren: 0.1 } },
};

export default function Services() {
	return (
		<Box as="section" id="services" py={{ base: 20, md: 28 }} bg="white">
			<Container maxW="6xl" px={{ base: 6, md: 8 }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Box textAlign="center" mb={16}>
						<Text
							fontSize="sm"
							fontWeight="medium"
							letterSpacing="wider"
							textTransform="uppercase"
							color="#0077FF"
						>
							Services
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							mt={4}
							fontFamily="poppins"
						>
							What We Offer
						</Heading>
						<Text color="slate.600" maxW="3xl" mx="auto" mt={4}>
							Pick what you need or let us audit your digital
							presence and recommend the right starting point.
						</Text>
					</Box>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
				>
					<Grid
						templateColumns={{
							base: "1fr",
							sm: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
						gap={6}
					>
						{services.map((service, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Box
									bg="#F5F7FA"
									borderRadius="3xl"
									p={7}
									border="1px solid"
									borderColor="slate.200"
									transition="all 0.3s"
									_hover={{
										borderColor: "rgba(0, 119, 255, 0.3)",
										boxShadow: "xl",
									}}
								>
									<Flex
										align="center"
										justify="center"
										w={12}
										h={12}
										borderRadius="xl"
										bg={service.bg}
										mb={5}
									>
										<service.icon
											className="w-6 h-6"
											style={{ color: service.iconColor }}
										/>
									</Flex>
									<Heading
										as="h3"
										fontSize="xl"
										fontWeight="bold"
										color="#0D1B2A"
										mb={2}
										fontFamily="poppins"
									>
										{service.title}
									</Heading>
									{/* <Text
										fontSize="sm"
										fontWeight="semibold"
										mb={3}
										color={service.iconColor}
									>
										{service.price}
									</Text> */}
									<Text
										color="slate.600"
										fontSize="sm"
										lineHeight="tall"
									>
										{service.description}
									</Text>
								</Box>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Box
						mt={12}
						p={6}
						bg="#F5F7FA"
						borderRadius="3xl"
						border="1px solid"
						borderColor="slate.200"
						textAlign="center"
					>
						<Text color="slate.600" fontSize="sm" mb={1}>
							<Text
								as="span"
								fontWeight="semibold"
								color="#0D1B2A"
							>
								Bundle & Save:
							</Text>{" "}
							Purchase 3+ services together and get a 10–15%
							discount on the total.
						</Text>
						<Text color="slate.500" fontSize="xs">
							Payment terms: 50% upfront, 50% on delivery.
						</Text>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}
