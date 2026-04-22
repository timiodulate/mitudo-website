"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
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

const whatsappLink =
	"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

const emailLink = "mailto:mitudoagency0@gmail.com";
const mapsLink = "https://maps.google.com/?q=Ogun,Nigeria";

export default function Contact() {
	return (
		<Box
			as="section"
			id="contact"
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
					<Box
						bg="white"
						borderRadius="3xl"
						p={{ base: 8, md: 12 }}
						border="1px solid"
						borderColor="slate.200"
						boxShadow="sm"
					>
						<Box textAlign="center" mb={10}>
							<Text
								fontSize="sm"
								fontWeight="semibold"
								letterSpacing="wider"
								textTransform="uppercase"
								color="#0077FF"
							>
								Get in touch
							</Text>
							<Heading
								as="h2"
								fontSize={{ base: "3xl", md: "4xl" }}
								fontWeight="bold"
								color="#0D1B2A"
								mt={4}
								fontFamily="poppins"
							>
								Ready to talk about your website?
							</Heading>
							<Text
								color="slate.600"
								maxW="2xl"
								mx="auto"
								mt={4}
								fontSize="lg"
							>
								Whether you're launching a new site, refreshing
								your brand, or need ongoing support, let's make
								it simple.
							</Text>
						</Box>

						<Flex
							direction={{ base: "column", sm: "row" }}
							gap={4}
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
									gap={2}
								>
									<MessageCircle size={18} />
									Chat on WhatsApp
								</Button>
							</ChakraLink>

							<ChakraLink
								href={emailLink}
								_hover={{ textDecoration: "none" }}
							>
								<Button
									variant="outline"
									borderWidth={1}
									borderColor="slate.300"
									color="#0D1B2A"
									px={10}
									py={6}
									fontSize="lg"
									borderRadius="full"
									w={{ base: "full", sm: "auto" }}
									gap={2}
								>
									<Mail size={18} />
									Send an Email
								</Button>
							</ChakraLink>
						</Flex>

						<Grid
							templateColumns={{
								base: "1fr",
								md: "repeat(3, 1fr)",
							}}
							gap={4}
						>
							<Box
								bg="gray.50"
								borderRadius="2xl"
								p={6}
								border="1px solid"
								borderColor="slate.200"
							>
								<Flex align="center" gap={3} mb={4}>
									<Mail size={18} color="#0077FF" />
									<Text fontWeight="semibold" color="#0D1B2A">
										Email
									</Text>
								</Flex>
								<Text color="slate.600">
									mitudoagency0@gmail.com
								</Text>
							</Box>

							<Box
								bg="gray.50"
								borderRadius="2xl"
								p={6}
								border="1px solid"
								borderColor="slate.200"
							>
								<Flex align="center" gap={3} mb={4}>
									<Phone size={18} color="#0077FF" />
									<Text fontWeight="semibold" color="#0D1B2A">
										Phone
									</Text>
								</Flex>
								<Text color="slate.600">+234 814 769 7225</Text>
							</Box>

							<Box
								bg="gray.50"
								borderRadius="2xl"
								p={6}
								border="1px solid"
								borderColor="slate.200"
							>
								<Flex align="center" gap={3} mb={4}>
									<MapPin size={18} color="#0077FF" />
									<Text fontWeight="semibold" color="#0D1B2A">
										Location
									</Text>
								</Flex>
								<ChakraLink
									href={mapsLink}
									target="_blank"
									rel="noopener noreferrer"
									color="#0077FF"
									_hover={{ textDecoration: "underline" }}
								>
									Ogun, Nigeria
								</ChakraLink>
							</Box>
						</Grid>
					</Box>
				</motion.div>
			</Container>
		</Box>
	);
}
