"use client";
import React, { useState } from "react";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Icon,
	Input,
	Link as ChakraLink,
	Stack,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import {
	CheckCircle,
	Clock,
	Instagram,
	Linkedin,
	Mail,
	MessageCircle,
	Phone,
	Send,
	X,
	MapPin,
} from "lucide-react";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import Footer from "@/components/versionTwo/layouts/Footer";
import { businessAddress, socialLinks } from "@/data";
import { toast } from "sonner";
import { useSubmitContactMutation } from "@/services/mitudoApi";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

interface FormState {
	name: string;
	email: string;
	business: string;
	message: string;
}

const EMPTY_FORM: FormState = {
	name: "",
	email: "",
	business: "",
	message: "",
};

export default function ContactPage() {
	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20your%20services.";

	const [form, setForm] = useState<FormState>(EMPTY_FORM);
	const [submitted, setSubmitted] = useState(false);
	const [submitContact, { isLoading }] = useSubmitContactMutation();

	// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await submitContact(form).unwrap();
			toast.success(
				"Your enquiry has been received. We will be in touch shortly.",
			);
			setForm(EMPTY_FORM);
		} catch {
			toast.error("Something went wrong. Please try again.");
		}
	};

	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar />

			<Box
				as="section"
				bg="white"
				borderBottom="1px solid"
				borderColor="slate.100"
				pt={{ base: 28, md: 36 }}
				pb={16}
				px={6}
			>
				<Container maxW="4xl" centerContent>
					<motion.div {...fadeInUp}>
						<Text
							fontSize="sm"
							fontWeight="medium"
							letterSpacing="widest"
							textTransform="uppercase"
							color="#0077FF"
						>
							Get in touch
						</Text>
						<Heading
							as="h1"
							fontSize={{ base: "4xl", md: "5xl" }}
							fontWeight="bold"
							mt={3}
							mb={5}
							fontFamily="poppins"
							color="#0D1B2A"
						>
							Let&apos;s Talk About
							<br />
							Your Business
						</Heading>
						<Text
							fontSize="lg"
							color="#4A5568"
							maxW="3xl"
							mx="auto"
						>
							Whether you need a website, help with your brand, or
							just want to understand your options — reach out. No
							pressure, no jargon.
						</Text>
					</motion.div>
				</Container>
			</Box>

			<Box as="section" py={{ base: 16, md: 24 }} px={6}>
				<Container maxW="7xl">
					<Grid
						templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
						gap={12}
					>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<Heading
								as="h2"
								fontSize="2xl"
								fontWeight="bold"
								color="#0D1B2A"
								fontFamily="poppins"
								mb={8}
							>
								Contact Details
							</Heading>

							<VStack gap={5} align="stretch" mb={10}>
								<ChakraLink
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									_hover={{ textDecoration: "none" }}
									flex={1}
									display={"inline-block"}
								>
									<Box
										p={5}
										bg="white"
										borderRadius="3xl"
										border="1px solid"
										borderColor="slate.200"
										transition="all 0.25s"
										_hover={{
											borderColor: "#0077FF",
											boxShadow: "lg",
										}}
									>
										<Flex gap={4} align="flex-start">
											<Box
												bg="#0077FF"
												color="white"
												borderRadius="2xl"
												boxSize={12}
												display="grid"
												placeItems="center"
											>
												<MessageCircle size={20} />
											</Box>
											<Box>
												<Text
													fontSize="sm"
													fontWeight="semibold"
													color="#0D1B2A"
												>
													WhatsApp (Fastest)
												</Text>
												<Text
													fontSize="sm"
													color="#4A5568"
													mt={1}
												>
													+234 814 769 7225
												</Text>
												<Text
													fontSize="xs"
													color="#0077FF"
													mt={1}
													fontWeight="medium"
												>
													Tap to start a chat →
												</Text>
											</Box>
										</Flex>
									</Box>
								</ChakraLink>

								<ChakraLink
									href="mailto:contact@mitudoagency.com"
									_hover={{ textDecoration: "none" }}
									display={"inline-block"}
								>
									<Box
										p={5}
										bg="white"
										borderRadius="3xl"
										border="1px solid"
										borderColor="slate.200"
										transition="all 0.25s"
										_hover={{
											borderColor: "#0077FF",
											boxShadow: "lg",
										}}
									>
										<Flex gap={4} align="flex-start">
											<Box
												bg="#0077FF"
												color="white"
												borderRadius="2xl"
												boxSize={12}
												display="grid"
												placeItems="center"
											>
												<Mail size={20} />
											</Box>
											<Box>
												<Text
													fontSize="sm"
													fontWeight="semibold"
													color="#0D1B2A"
												>
													Email
												</Text>
												<Text
													fontSize="sm"
													color="#4A5568"
													mt={1}
												>
													contact@mitudoagency.com
												</Text>
											</Box>
										</Flex>
									</Box>
								</ChakraLink>

								<Box
									p={5}
									bg="white"
									borderRadius="3xl"
									border="1px solid"
									borderColor="slate.200"
								>
									<Flex gap={4} align="flex-start">
										<Box
											bg="#00C2CB"
											color="white"
											borderRadius="2xl"
											boxSize={12}
											display="grid"
											placeItems="center"
										>
											<MapPin size={20} />
										</Box>
										<Box>
											<Text
												fontSize="sm"
												fontWeight="semibold"
												color="#0D1B2A"
											>
												Location
											</Text>
											<Text
												fontSize="sm"
												color="#4A5568"
												mt={1}
											>
												{businessAddress}
											</Text>
											<Text
												fontSize="xs"
												color="#4A5568"
												mt={1}
											>
												Serving clients nationwide
											</Text>
										</Box>
									</Flex>
								</Box>

								<Box
									p={5}
									bg="white"
									borderRadius="3xl"
									border="1px solid"
									borderColor="slate.200"
								>
									<Flex gap={4} align="flex-start">
										<Box
											bg="#00C2CB"
											color="white"
											borderRadius="2xl"
											boxSize={12}
											display="grid"
											placeItems="center"
										>
											<Clock size={20} />
										</Box>
										<Box>
											<Text
												fontSize="sm"
												fontWeight="semibold"
												color="#0D1B2A"
											>
												Response Time
											</Text>
											<Text
												fontSize="sm"
												color="#4A5568"
												mt={1}
											>
												Within 24 hours
											</Text>
											<Text
												fontSize="xs"
												color="#4A5568"
												mt={1}
											>
												Usually much faster on WhatsApp
											</Text>
										</Box>
									</Flex>
								</Box>
							</VStack>

							<Box>
								<Text
									fontSize="sm"
									fontWeight="semibold"
									color="#0D1B2A"
									mb={4}
								>
									Find Us Online
								</Text>
								<Stack gap={3}>
									{socialLinks.map((link) => (
										<ChakraLink
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											display="flex"
											alignItems="center"
											gap={3}
											color="#4A5568"
											fontSize="sm"
											transition="all 0.25s"
											_hover={{ color: link.hoverColor }}
										>
											<Icon as={link.icon} boxSize={4} />
											<Text>
												{link.label} —{" "}
												<Text
													as="span"
													fontWeight="medium"
												>
													{link.handle}
												</Text>
											</Text>
										</ChakraLink>
									))}
								</Stack>
							</Box>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Box
								bg="white"
								borderRadius="3xl"
								p={{ base: 6, md: 8 }}
								border="1px solid"
								borderColor="slate.200"
								boxShadow="sm"
							>
								<Heading
									as="h2"
									fontSize="2xl"
									fontWeight="bold"
									color="#0D1B2A"
									fontFamily="poppins"
									mb={2}
								>
									Send an Enquiry
								</Heading>
								<Text color="#4A5568" fontSize="sm" mb={8}>
									Fill this out and we&apos;ll get back to you
									within 24 hours.
								</Text>

								{submitted ? (
									<VStack gap={5} textAlign="center" py={12}>
										<Box
											bg="#10B981"
											color="white"
											borderRadius="full"
											boxSize={16}
											display="grid"
											placeItems="center"
											mx="auto"
										>
											<CheckCircle size={28} />
										</Box>
										<Heading
											as="h3"
											fontSize="xl"
											fontWeight="bold"
											color="#0D1B2A"
											fontFamily="poppins"
										>
											Message Sent!
										</Heading>
										<Text color="#4A5568" fontSize="sm">
											Your email client should have
											opened. We&apos;ll reply within 24
											hours.
										</Text>
										<Button
											variant="ghost"
											color="#0077FF"
											onClick={() => setSubmitted(false)}
										>
											Send another message
										</Button>
									</VStack>
								) : (
									<Box as="form" onSubmit={handleSubmit}>
										<Stack gap={5}>
											<Box>
												<Text
													fontSize="sm"
													fontWeight="medium"
													color="#0D1B2A"
													mb={2}
												>
													Your Name
												</Text>
												<Input
													value={form.name}
													onChange={(event) =>
														setForm({
															...form,
															name: event.target
																.value,
														})
													}
													placeholder="John Doe"
													bg="gray.50"
													borderColor="slate.200"
													_focus={{
														borderColor: "#0077FF",
														boxShadow:
															"0 0 0 1px #0077FF",
													}}
												/>
											</Box>

											<Box>
												<Text
													fontSize="sm"
													fontWeight="medium"
													color="#0D1B2A"
													mb={2}
												>
													Email Address
												</Text>
												<Input
													type="email"
													value={form.email}
													onChange={(event) =>
														setForm({
															...form,
															email: event.target
																.value,
														})
													}
													placeholder="john@example.com"
													bg="gray.50"
													borderColor="slate.200"
													_focus={{
														borderColor: "#0077FF",
														boxShadow:
															"0 0 0 1px #0077FF",
													}}
												/>
											</Box>

											<Box>
												<Text
													fontSize="sm"
													fontWeight="medium"
													color="#0D1B2A"
													mb={2}
												>
													Business Name
												</Text>
												<Input
													value={form.business}
													onChange={(event) =>
														setForm({
															...form,
															business:
																event.target
																	.value,
														})
													}
													placeholder="Your Business Name (optional)"
													bg="gray.50"
													borderColor="slate.200"
													_focus={{
														borderColor: "#0077FF",
														boxShadow:
															"0 0 0 1px #0077FF",
													}}
												/>
											</Box>

											<Box>
												<Text
													fontSize="sm"
													fontWeight="medium"
													color="#0D1B2A"
													mb={2}
												>
													What do you need help with?
												</Text>
												<Textarea
													rows={4}
													value={form.message}
													onChange={(event) =>
														setForm({
															...form,
															message:
																event.target
																	.value,
														})
													}
													placeholder="Tell us about your business and what you're looking for..."
													bg="gray.50"
													borderColor="slate.200"
													_focus={{
														borderColor: "#0077FF",
														boxShadow:
															"0 0 0 1px #0077FF",
													}}
												/>
											</Box>

											<Button
												type="submit"
												size="lg"
												bg="#0077FF"
												color="white"
												_hover={{ bg: "#0066DD" }}
												width="full"
												display="inline-flex"
												alignItems="center"
												justifyContent="center"
												gap={2}
											>
												<Send size={16} />
												Send Message
											</Button>
											<Text
												textAlign="center"
												fontSize="xs"
												color="#64748B"
											>
												Or chat instantly via{" "}
												<ChakraLink
													href={whatsappLink}
													target="_blank"
													rel="noopener noreferrer"
													color="#0077FF"
												>
													WhatsApp
												</ChakraLink>
											</Text>
										</Stack>
									</Box>
								)}
							</Box>
						</motion.div>
					</Grid>
				</Container>
			</Box>

			<Footer />
		</Box>
	);
}
