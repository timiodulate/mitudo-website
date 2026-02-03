import React from "react";
import { motion } from "framer-motion";
import {
	Globe,
	Smartphone,
	MessageCircle,
	Mail,
	Zap,
	Clock,
	Shield,
} from "lucide-react";
import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
	VStack,
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

export default function WhatsIncluded() {
	const included = [
		{ icon: Globe, text: "4–6 page professional website" },
		{ icon: Smartphone, text: "Mobile-friendly design" },
		{ icon: Clock, text: "Fast loading speed" },
		{ icon: MessageCircle, text: "WhatsApp chat button" },
		{ icon: Mail, text: "Contact form" },
		{ icon: Zap, text: "Basic SEO setup" },
		{ icon: Shield, text: "7–10 days delivery" },
	];

	return (
		<Box
			as="section"
			id="services"
			py={{ base: 20, md: 28 }}
			px={6}
			bg="white"
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
							Features
						</Text>
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							fontFamily="poppins"
							mb={4}
						>
							What's Included
						</Heading>
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
							sm: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
						gap={6}
					>
						{included.map((item, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Flex
									align="center"
									gap={4}
									p={5}
									borderRadius="xl"
									bg="#F5F7FA"
									transition="colors 0.3s"
									border="1px solid"
									borderColor="slate.200"
									_hover={{
										bg: "rgba(0, 194, 203, 0.1)",
										borderColor: "rgba(0, 194, 203, 0.3)",
									}}
								>
									<Box
										w={12}
										h={12}
										borderRadius="xl"
										bg="rgba(0, 119, 255, 0.1)"
										display="flex"
										alignItems="center"
										justifyContent="center"
										flexShrink={0}
									>
										<item.icon className="w-6 h-6 text-[#0077FF]" />
									</Box>

									<Text fontWeight="medium" color="#0D1B2A">
										{item.text}
									</Text>
								</Flex>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<Text
						textAlign="center"
						color="slate.600"
						mt={12}
						fontSize="lg"
					>
						No unnecessary complexity — just a website that works
						for your business.
					</Text>
				</motion.div>
				{/* <motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<Text
						textAlign="center"
						color="slate.500"
						mt={12}
						fontSize="sm"
					>
						Designed for service businesses, schools, real estate,
						NGOs, and growing brands.
					</Text>
				</motion.div> */}
			</Container>
		</Box>
	);
}
