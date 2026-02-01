import React from "react";
import { motion } from "framer-motion";
import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	VStack,
	Badge,
} from "@chakra-ui/react";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Pricing() {
	const pricing = [
		{
			label: "Small Businesses",
			price: "₦150,000",
			description: "Perfect starting point",
		},
		{
			label: "Most SMEs",
			price: "₦200,000 – ₦250,000",
			description: "Most popular choice",
			featured: true,
		},
		{
			label: "Larger Projects",
			price: "₦300,000+",
			description: "Complex requirements",
		},
	];

	return (
		<Box
			as="section"
			id="pricing"
			py={{ base: 20, md: 28 }}
			px={6}
			bgGradient="to-b"
			gradientFrom="#F5F7FA"
			gradientTo="white"
		>
			<Container maxW="5xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<VStack gap={3} textAlign="center" mb={16}>
						<Text
							fontSize="sm"
							fontWeight="medium"
							letterSpacing="wider"
							textTransform="uppercase"
							color="#0077FF"
						>
							Investment
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							fontFamily="poppins"
							mb={1}
						>
							Pricing
						</Heading>
						<Text color="slate.600">
							Business websites typically cost between:
						</Text>
					</VStack>
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
							md: "repeat(3, 1fr)",
						}}
						gap={6}
					>
						{pricing.map((tier, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Box
									position="relative"
									p={8}
									borderRadius="2xl"
									transition="all 0.3s"
									bg={tier.featured ? "#0D1B2A" : "white"}
									color={tier.featured ? "white" : "inherit"}
									boxShadow={
										tier.featured
											? "0 25px 50px -12px rgba(13, 27, 42, 0.2)"
											: "none"
									}
									borderStyle={
										tier.featured ? "none" : "solid"
									}
									borderWidth={tier.featured ? "none" : "1px"}
									borderColor={
										tier.featured
											? "transparent"
											: "slate.200"
									}
									transform={
										tier.featured
											? "scale(1.05)"
											: "scale(1)"
									}
									_hover={{
										borderColor: tier.featured
											? ""
											: "#0077ff",
									}}
								>
									{tier.featured && (
										<Badge
											position="absolute"
											top={-3}
											left="50%"
											transform="translateX(-50%)"
											bg="#00C2CB"
											color="#0D1B2A"
											fontSize="xs"
											fontWeight="semibold"
											px={4}
											py={1}
											borderRadius="full"
										>
											Most Popular
										</Badge>
									)}
									<Text
										fontSize="sm"
										fontWeight="medium"
										mb={2}
										color={
											tier.featured
												? "#00C2CB"
												: "#0077FF"
										}
									>
										{tier.label}
									</Text>
									<Heading
										as="h3"
										fontSize={{
											base: "xl",
											md: "2xl",
											lg: "3xl",
										}}
										fontWeight="bold"
										mb={2}
										fontFamily="poppins"
										color={
											tier.featured ? "white" : "#0d1b2a"
										}
									>
										{tier.price}
									</Heading>
									<Text
										fontSize="sm"
										color={
											tier.featured
												? "slate.400"
												: "slate.500"
										}
									>
										{tier.description}
									</Text>
								</Box>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<Text textAlign="center" color="slate.500" mt={10}>
						Final pricing depends on the number of pages and
						features needed.
					</Text>
				</motion.div>
			</Container>
		</Box>
	);
}
