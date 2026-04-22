"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import {
	Box,
	Container,
	Heading,
	Text,
	Button,
	Link as ChakraLink,
} from "@chakra-ui/react";

export default function Hero() {
	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	return (
		<Box as="section" position="relative" overflow="hidden" bg="white">
			<Box position="absolute" inset={0} pointerEvents="none">
				<Box
					position="absolute"
					top="5rem"
					right={0}
					w="500px"
					h="500px"
					// bg="#0077FF"
					bg="#00C2CB"
					borderRadius="full"
					filter="blur(120px)"
				/>
				<Box
					position="absolute"
					bottom={0}
					left={0}
					w="320px"
					h="320px"
					bg="#00C2CB"
					borderRadius="full"
					filter="blur(120px)"
				/>
			</Box>

			<Container
				maxW="5xl"
				mx="auto"
				position="relative"
				pt={{ base: 32, md: 40 }}
				pb={{ base: 24, md: 32 }}
				px={{ base: 6 }}
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
				>
					<Box
						display="inline-flex"
						alignItems="center"
						gap={2}
						px={4}
						py={2}
						bg="rgba(0, 119, 255, 0.08)"
						border="1px solid"
						borderColor="rgba(0, 119, 255, 0.15)"
						borderRadius="full"
						fontSize="sm"
						color="#0077FF"
						mb={8}
					>
						<Box
							w={2}
							h={2}
							bg="#00C2CB"
							borderRadius="full"
							animation="pulse 2s infinite"
						/>
						Digital Presence for Nigerian Businesses
					</Box>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<Heading
						as="h1"
						fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
						fontWeight="bold"
						lineHeight="shorter"
						mb={6}
						letterSpacing="tight"
						fontFamily="poppins"
					>
						Set up right.
						<br />
						<Box as="span" color="#00C2CB">
							Look legit.
						</Box>
						<br />
						{/* <Box as="span" color="#00C2CB"> */}
						<Box as="span">Get found.</Box>
					</Heading>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					<Text
						fontSize={{ base: "lg", md: "xl" }}
						color="gray.600"
						maxW="2xl"
						mb={10}
						lineHeight="relaxed"
					>
						We help businesses look credible and get found online —
						from brand identity and registration to websites, SEO,
						and professional social media presence.
					</Text>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<Box
						display="flex"
						flexDirection={{ base: "column", sm: "row" }}
						gap={4}
					>
						<ChakraLink
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "none" }}
						>
							<Button
								size="lg"
								bg="#0077FF"
								color="white"
								px={8}
								py={6}
								fontSize="lg"
								borderRadius="full"
								boxShadow="0 10px 25px -5px rgba(0, 119, 255, 0.25)"
								transition="all 0.3s"
								_hover={{
									bg: "#0066DD",
									boxShadow:
										"0 20px 40px -10px rgba(0, 119, 255, 0.3)",
									transform: "translateY(-2px)",
								}}
							>
								<MessageCircle className="w-5 h-5" />
								Start a Conversation
							</Button>
						</ChakraLink>

						<ChakraLink
							href="#work"
							_hover={{ textDecoration: "none" }}
						>
							<Button
								size="lg"
								variant="outline"
								borderWidth={1}
								borderColor="rgba(13, 27, 42, 0.15)"
								color="#0D1B2A"
								_hover={{ bg: "rgba(0, 119, 255, 0.08)" }}
								px={8}
								py={6}
								fontSize="lg"
								borderRadius="full"
							>
								View My Work
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</ChakraLink>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}
