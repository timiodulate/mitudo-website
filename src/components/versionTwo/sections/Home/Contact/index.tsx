"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, CheckCircle, RefreshCw } from "lucide-react";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
	VStack,
	Badge,
} from "@chakra-ui/react";

export default function Contact() {
	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	return (
		<Box
			as="section"
			id="contact"
			py={{ base: 20, md: 28 }}
			px={6}
			bg="#0D1B2A"
			color="white"
		>
			<Container maxW="3xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<VStack gap={4} textAlign="center">
						<Heading
							as="h2"
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							fontFamily="poppins"
						>
							Ready to Discuss Your Project?
						</Heading>
						<Text color="slate.400" fontSize="lg">
							Let's discuss your project. Reach out via WhatsApp
							or email.
						</Text>

						<Flex
							gap={4}
							flexDirection={{ base: "column", sm: "row" }}
							justify="center"
							mb={10}
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
									// _hover={{ bg: "#0066DD" }}
									color="white"
									px={10}
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
									w={{ base: "full", sm: "auto" }}
								>
									<MessageCircle className="w-5 h-5" />
									WhatsApp Me
								</Button>
							</ChakraLink>
							<ChakraLink
								href="mailto:mitudoagency0@gmail.com"
								_hover={{ textDecoration: "none" }}
							>
								<Button
									size="lg"
									variant="outline"
									borderColor="rgba(0, 194, 203, 0.3)"
									color="white"
									_hover={{
										bg: "rgba(0, 194, 203, 0.1)",
									}}
									px={10}
									py={6}
									fontSize="lg"
									borderRadius="full"
									w={{ base: "full", sm: "auto" }}
								>
									Send an Email
									<Mail className="w-5 h-5" />
								</Button>
							</ChakraLink>
						</Flex>

						<VStack gap={2} color="slate.400">
							<Flex align="center" gap={2}>
								<Mail className="w-4 h-4 text-[#00C2CB]" />
								<Text>mitudoagency0@gmail.com</Text>
							</Flex>
							<Text fontSize="sm">
								I respond within 24 hours.
							</Text>
						</VStack>
					</VStack>
				</motion.div>
			</Container>
		</Box>
	);
}
