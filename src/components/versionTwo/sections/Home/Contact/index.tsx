"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
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
import {
	businessEmail,
	businessWABaseLink,
	businessWANumberSpread,
} from "@/data";

const whatsappLink = `${businessWABaseLink}?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.`;

const emailLink = `mailto:${businessEmail}`;
const mapsLink = "https://maps.google.com/?q=Ogun,Nigeria";

export default function Contact() {
	return (
		<Box
			as="section"
			id="contact"
			py={{ base: 20, md: 28 }}
			// px={6}
			bg="#F5F7FA"
		>
			<Container maxW="3xl" px={{ base: 6, md: 8 }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Box textAlign="center" mb={10}>
						<Text
							fontSize="sm"
							fontWeight="semibold"
							letterSpacing="wider"
							textTransform="uppercase"
							color="#0077FF"
						>
							Ready?
						</Text>

						<Heading
							as="h2"
							fontSize={{ base: "3xl", md: "4xl" }}
							fontWeight="bold"
							color="#0D1B2A"
							mt={4}
							fontFamily="poppins"
						>
							Let's Make Your Business Look the Part
						</Heading>

						<Text color="#4A5568" mx="auto" mt={4} fontSize="md">
							We help businesses look credible and get found
							online. Reach out — no pressure, no jargon.
						</Text>
					</Box>

					<Flex
						direction={{ base: "column", md: "row" }}
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
								fontSize="base"
								borderRadius="full"
								// boxShadow="0 10px 25px -5px rgba(0, 119, 255, 0.25)"
								transition="all 0.3s"
								_hover={{
									bg: "#0066DD",
									// boxShadow:
									// 	"0 20px 40px -10px rgba(0, 119, 255, 0.3)",
									transform: "translateY(-2px)",
								}}
								w={{ base: "full", md: "auto" }}
								gap={2}
								h={10}
								className=" !shadow-lg !shadow-[#0077FF]/25 hover:-translate-y-0.5"
							>
								<MessageCircle className="!w-4 !mr-2" />
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
								// borderColor="slate.300"
								// color="#0D1B2A"
								color="#0077FF"
								px={10}
								py={6}
								fontSize="base"
								borderRadius="full"
								w={{ base: "full", md: "auto" }}
								gap={2}
								h={10}
								bg={"white"}
								className="!border-[#0077FF]/30  !hover:bg-[#0077FF]/10 "
							>
								<Mail className="!w-4 !mr-2" />
								Send an Email
							</Button>
						</ChakraLink>
					</Flex>

					<Flex
						flexDirection={{ base: "column", md: "row" }}
						alignItems={"center"}
						justifyContent={"center"}
						fontSize={"sm"}
						// gap={4}
						gap={6}
						color="#4A5568"
					>
						<Box
							display={"flex"}
							gap={2}
							alignItems="center"
							// bg="gray.50"
							// borderRadius="2xl"
							// p={6}
							// border="1px solid"
							// borderColor="slate.200"
						>
							<Flex
								align="center"
								gap={3}
								// mb={4}
							>
								<Mail size={16} color="#0077FF" />
								{/* <Text fontWeight="semibold" color="#0D1B2A">
									Email
								</Text> */}
							</Flex>
							<Text
							// color="slate.600"
							>
								{businessEmail}
							</Text>
						</Box>

						<Box
							display={"flex"}
							gap={2}
							alignItems="center"

							// bg="gray.50"
							// borderRadius="2xl"
							// p={6}
							// border="1px solid"
							// borderColor="slate.200"
						>
							<Flex
								align="center"
								gap={3}
								// mb={4}
							>
								<Phone size={16} color="#0077FF" />
								{/* <Text fontWeight="semibold" color="#0D1B2A">
									Phone
								</Text> */}
							</Flex>
							<Text
							// color="slate.600"
							>
								{businessWANumberSpread}
							</Text>
						</Box>

						<Box
							display={"flex"}
							gap={2}
							alignItems="center"

							// bg="gray.50"
							// borderRadius="2xl"
							// p={6}
							// border="1px solid"
							// borderColor="slate.200"
						>
							<Flex
								align="center"
								gap={3}
								// mb={4}
							>
								<Clock size={16} color="#0077FF" />
								{/* <Text fontWeight="semibold" color="#0D1B2A">
									Location
								</Text> */}
							</Flex>
							{/* <ChakraLink
								href={mapsLink}
								target="_blank"
								rel="noopener noreferrer"
								color="#0077FF"
								_hover={{ textDecoration: "underline" }}
							>
								Ogun, Nigeria
							</ChakraLink> */}
							<Text
							// color="slate.600"
							>
								Reply within 24 hours
							</Text>
						</Box>
					</Flex>
				</motion.div>
			</Container>
		</Box>
	);
}
