"use client";

import React from "react";
import { motion } from "@/components/ui/motion";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";

const steps = [
	{
		step: "01",
		title: "Set Up Right",
		description:
			"Domain, professional email, business registration, social handles — the foundation every business needs.",
		color: "#0077FF",
	},
	{
		step: "02",
		title: "Look Legit",
		description:
			"Brand identity, collateral, and a professional website that makes you look credible before a word is said.",
		color: "#00C2CB",
	},
	{
		step: "03",
		title: "Get Found",
		description:
			"Google Business, SEO, and social presence — so the right people can actually find and trust you online.",
		color: "#0077FF",
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function HowItWorks() {
	return (
		<Box
			as="section"
			id="how-it-works"
			py={{ base: 20, md: 28 }}
			px={6}
			bg="#F5F7FA"
		>
			<Container maxW="5xl">
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
							Our Approach
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							mt={4}
							fontFamily="poppins"
						>
							Three Stages. One Goal.
						</Heading>
						<Text color="slate.600" maxW="3xl" mx="auto" mt={4}>
							We take businesses from invisible to credible and
							findable — in the right order, done right.
						</Text>
					</Box>
				</motion.div>

				<Grid
					templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
					gap={6}
				>
					{steps.map((item) => (
						<motion.div key={item.step} variants={fadeInUp}>
							<Box
								bg="white"
								borderRadius="3xl"
								p={8}
								border="1px solid"
								borderColor="slate.200"
								boxShadow="sm"
								transition="all 0.3s"
								_hover={{ boxShadow: "xl" }}
							>
								<Text
									fontSize="5xl"
									fontWeight="bold"
									fontFamily="poppins"
									color={item.color}
									opacity={0.15}
								>
									{item.step}
								</Text>
								<Heading
									as="h3"
									fontSize={{ base: "xl", md: "2xl" }}
									mt={4}
									mb={4}
									color="#0D1B2A"
									fontFamily="poppins"
								>
									{item.title}
								</Heading>
								<Text color="slate.600" lineHeight="tall">
									{item.description}
								</Text>
							</Box>
						</motion.div>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
