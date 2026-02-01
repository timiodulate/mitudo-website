import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, MessageCircle } from "lucide-react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Link as ChakraLink,
	Text,
} from "@chakra-ui/react";

export default function WebsiteRefresh() {
	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	return (
		<Box as="section" py={{ base: 20, md: 28 }} px={6} bg="white">
			<Container maxW="4xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Box
						bgGradient="to-br"
						gradientFrom={"#0d1b2a"}
						gradientTo={"#142535"}
						borderRadius="3xl"
						p={{ base: 8, md: 12 }}
						boxShadow="xl"
						color="white"
						position="relative"
						overflow="hidden"
					>
						<Box
							position="absolute"
							top={0}
							right={0}
							w={64}
							h={64}
							bg="rgba(0, 119, 255, 0.2)"
							borderRadius="full"
							filter="blur(96px)"
						/>
						<Box
							position="absolute"
							bottom={0}
							left={0}
							w={48}
							h={48}
							bg="rgba(0, 194, 203, 0.1)"
							borderRadius="full"
							filter="blur(96px)"
						/>

						<Box position="relative" zIndex={1}>
							<Flex align="center" gap={3} mb={4}>
								<Box
									w={12}
									h={12}
									borderRadius="xl"
									bg="rgba(0, 119, 255, 0.2)"
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<RefreshCw className="w-6 h-6 text-[#00C2CB]" />
								</Box>
								<Text
									color="#00C2CB"
									fontWeight="medium"
									fontSize="sm"
									letterSpacing="wider"
									textTransform="uppercase"
								>
									Service
								</Text>
							</Flex>
							<Heading
								as="h2"
								fontSize={{
									base: "xl",
									md: "2xl",
									lg: "3xl",
								}}
								fontWeight="bold"
								mb={4}
								fontFamily="poppins"
							>
								Website Refresh Service
							</Heading>
							<Text color="slate.300" mb={6} maxW="2xl">
								Redesigning, updating, or improving an existing
								website — content, design, and layout — to make
								it look modern and professional.
							</Text>

							<Box
								bg="rgba(255, 255, 255, 0.05)"
								backdropFilter="blur(4px)"
								borderRadius="xl"
								p={6}
								mb={6}
								border="1px solid"
								borderColor="rgba(255, 255, 255, 0.1)"
							>
								<Text
									color="#00C2CB"
									fontWeight="medium"
									fontSize="sm"
									mb={2}
								>
									Who it's for
								</Text>
								<Text color="slate.200">
									Businesses that already have a website but
									want it updated to a premium look and
									improved user experience.
								</Text>
							</Box>

							<Flex
								gap={4}
								flexDirection={{
									base: "column",
									sm: "row",
								}}
								justifyContent="space-between"
								alignItems={{
									base: "stretch",
									sm: "center",
								}}
							>
								<Box>
									<Text
										color="#00C2CB"
										fontWeight="medium"
										fontSize="sm"
										mb={1}
									>
										Pricing
									</Text>
									<Heading
										as="h3"
										fontSize={{
											base: "2xl",
											md: "3xl",
										}}
										fontWeight="bold"
										fontFamily="poppins"
									>
										₦100,000 – ₦250,000
									</Heading>
									<Text
										color="slate.400"
										fontSize="sm"
										mt={1}
									>
										depending on scope
									</Text>
								</Box>
								<ChakraLink
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									_hover={{ textDecoration: "none" }}
								>
									<Button
										size="lg"
										bg="#0077FF"
										_hover={{ bg: "#0066DD" }}
										color="white"
										fontWeight="semibold"
										px={8}
										py={6}
										borderRadius="full"
										boxShadow="0 10px 25px -5px rgba(0, 119, 255, 0.25)"
									>
										<MessageCircle className="w-5 h-5" />
										Discuss Your Project
									</Button>
								</ChakraLink>
							</Flex>
						</Box>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}
