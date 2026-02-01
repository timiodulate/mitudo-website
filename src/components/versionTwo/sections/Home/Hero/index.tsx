import React from "react";
import { motion } from "@/components/ui/motion";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import {
	Box,
	Container,
	Heading,
	Text,
	Button,
	VStack,
	Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function Hero() {
	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	return (
		<Box
			as="section"
			position="relative"
			overflow="hidden"
			bgGradient="to-br"
			gradientFrom="#0D1B2A"
			gradientVia="#142535"
			gradientTo="#0D1B2A"
			color="white"
		>
			{/* Gradient overlays */}
			<Box position="absolute" inset={0} opacity={0.2}>
				<Box
					position="absolute"
					top="5rem"
					left="2.5rem"
					w="18rem"
					h="18rem"
					bg="#00C2CB"
					borderRadius="full"
					filter="blur(60px)"
				/>
				<Box
					position="absolute"
					bottom="5rem"
					right="2.5rem"
					w="24rem"
					h="24rem"
					bg="#0077FF"
					borderRadius="full"
					filter="blur(60px)"
				/>
			</Box>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				//  position="relative"
			>
				<Container
					maxW="5xl"
					mx={"auto"}
					position="relative"
					// py={{ base: 32, md: 40 }}
					pt={{ base: 32, md: 40 }}
					pb={{ base: 24, md: 32 }}
					px={{ base: 6 }}
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						<Box
							display="inline-flex"
							alignItems="center"
							gap={2}
							px={4}
							py={2}
							bg="rgba(255, 255, 255, 0.1)"
							backdropFilter="blur(8px)"
							borderRadius="full"
							fontSize="sm"
							color="#00C2CB"
							mb={8}
							//
							// 				 initial={{ opacity: 0, y: 20 }}
							// animate={{ opacity: 1, y: 0 }}
							// transition={{ delay: 0.2 }}
						>
							<Box
								w={2}
								h={2}
								bg="#00C2CB"
								borderRadius="full"
								animation="pulse 2s infinite"
							/>
							Web Development for Businesses
						</Box>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						<Heading
							as="h1"
							fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
							fontWeight="bold"
							lineHeight="shorter"
							mb={6}
							letterSpacing="tight"
							fontFamily="poppins"
						>
							Professional Websites
							<br />
							{/* <br /> */}
							<Box as="span" color="#00C2CB">
								for Businesses
							</Box>
						</Heading>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<Text
							fontSize={{ base: "lg", md: "xl" }}
							// color="slate.300"
							color="gray.300"
							maxW="2xl"
							mb={6}
							lineHeight="relaxed"
						>
							I help businesses build{" "}
							<Box as="span" fontWeight={"bold"}>
								{" "}
								professional, mobile-friendly websites
							</Box>{" "}
							that make them look credible and help customers
							reach them easily.
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
					>
						<Text
							// color="slate.400"
							color="gray.400"
							maxW="2xl"
							mb={8}
							lineHeight="relaxed"
						>
							Whether your business relies on WhatsApp, Instagram,
							or word of mouth alone, a proper website helps you
							look established and trustworthy. I focus on clean
							design, clarity, and making it easy for customers to
							contact you.
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<Box
							display="flex"
							flexDirection={{ base: "column", sm: "row" }}
							gap={4}
						>
							<ChakraLink
								href={whatsappLink}
								// isExternal
								target="_blank"
								rel="noopener noreferrer"
								_hover={{ textDecoration: "none" }}
							>
								<Button
									size="lg"
									bg="#0077FF"
									// _hover={{ bg: "#0066DD" }}
									color="white"
									px={8}
									py={6}
									fontSize="lg"
									borderRadius="full"
									boxShadow="0 10px 25px -5px rgba(0, 119, 255, 0.25)"
									// boxShadow="0 10px 25px rgba(0, 119, 255, 0.25)"
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
									borderColor="rgba(0, 194, 203, 0.3)"
									color="white"
									_hover={{ bg: "rgba(0, 194, 203, 0.1)" }}
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
			</motion.div>
		</Box>
	);
}
