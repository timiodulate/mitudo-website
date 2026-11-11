"use client";
import React from "react";
import NextLink from "next/link";
import { motion } from "@/components/ui/motion";
import {
	ArrowRight,
	BadgeCheck,
	CheckCircle2,
	Mail,
	MapPin,
	MessageCircle,
	ShieldCheck,
	Star,
} from "lucide-react";
import { Box, Button, Flex, Grid, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { whatsappLink } from "@/data";
import { ROUTES } from "@/data/routes";

const card = {
	position: "absolute" as const,
	bg: "white",
	borderRadius: "2xl",
	border: "1px solid",
	borderColor: "slate.200",
	boxShadow: "0 20px 45px -20px rgba(13, 27, 42, 0.25)",
};

const line = (w: string, bg = "slate.200") => <Box h={2} w={w} bg={bg} borderRadius="full" />;

/** An illustration of what we set up: a website, a Google listing, email and a system. */
function HeroVisual() {
	return (
		<Box position="relative" h="460px" aria-hidden>
			{/* Website */}
			<Box {...card} top={0} left="8%" right={0} overflow="hidden">
				<Flex align="center" gap={1.5} px={4} py={3} borderBottom="1px solid" borderColor="slate.100">
					{["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
						<Box key={c} w={2.5} h={2.5} borderRadius="full" bg={c} />
					))}
					<Box ml={3} px={3} py={1} bg="#F5F7FA" borderRadius="full" fontSize="xs" color="#4A5568">
						yourbusiness.com
					</Box>
				</Flex>
				<Box p={6} bgGradient="to-br" gradientFrom="rgba(0,119,255,0.08)" gradientTo="rgba(0,194,203,0.12)">
					<Box h={3} w="55%" bg="#0D1B2A" borderRadius="full" mb={3} />
					<Box h={3} w="40%" bg="#0D1B2A" borderRadius="full" mb={5} opacity={0.8} />
					<Flex direction="column" gap={2} mb={5}>
						{line("80%")}
						{line("65%")}
					</Flex>
					<Box w="90px" h={7} bg="#0077FF" borderRadius="full" />
				</Box>
				<Grid templateColumns="repeat(3, 1fr)" gap={3} p={5}>
					{[0, 1, 2].map((i) => (
						<Box key={i} h={14} bg="#F5F7FA" borderRadius="lg" />
					))}
				</Grid>
			</Box>

			{/* Google listing */}
			<Box {...card} top="190px" left={0} w="58%" p={4}>
				<Flex align="center" gap={2} mb={1}>
					<Text fontWeight="semibold" fontSize="sm" color="#0D1B2A" fontFamily="poppins">
						Your Business Ltd
					</Text>
					<BadgeCheck size={16} color="#0077FF" />
				</Flex>
				<Flex align="center" gap={1} color="#F5A623" mb={1}>
					{[0, 1, 2, 3, 4].map((i) => (
						<Star key={i} size={12} fill="currentColor" />
					))}
					<Text fontSize="xs" color="#4A5568" ml={1}>
						Google reviews
					</Text>
				</Flex>
				<Flex align="center" gap={1} fontSize="xs" color="#4A5568" mb={3}>
					<MapPin size={12} /> Open now · On Google Maps
				</Flex>
				<Flex gap={2}>
					{["Call", "Directions", "Website"].map((label) => (
						<Box key={label} px={2.5} py={1} borderRadius="full" border="1px solid" borderColor="slate.200" fontSize="2xs" color="#0077FF">
							{label}
						</Box>
					))}
				</Flex>
			</Box>

			{/* Email */}
			<Flex {...card} top="290px" right={0} w="62%" p={4} gap={3} align="center">
				<Flex flexShrink={0} w={9} h={9} borderRadius="lg" bg="rgba(0,194,203,0.15)" color="#008C93" align="center" justify="center">
					<Mail size={16} />
				</Flex>
				<Box minW={0}>
					<Text fontSize="sm" fontWeight="semibold" color="#0D1B2A" truncate>
						hello@yourbusiness.com
					</Text>
					<Text fontSize="xs" color="#10B981">
						Lands in the inbox, not spam
					</Text>
				</Box>
			</Flex>

			{/* A system that runs things */}
			<Box {...card} top="380px" left="10%" w="56%" p={4} bg="#0D1B2A" borderColor="#0D1B2A">
				<Text fontSize="xs" color="whiteAlpha.700" mb={2}>
					This week
				</Text>
				<Flex direction="column" gap={1.5}>
					{["Orders recorded automatically", "Invoices sent and paid", "CAC annual return filed"].map((item) => (
						<Flex key={item} align="center" gap={2} fontSize="xs" color="white">
							<CheckCircle2 size={13} color="#00C2CB" />
							{item}
						</Flex>
					))}
				</Flex>
			</Box>
		</Box>
	);
}

export default function Hero() {
	return (
		<Box as="section" position="relative" overflow="hidden" bg="white">
			<Box position="absolute" inset={0} pointerEvents="none">
				<Box
					position="absolute"
					top="5rem"
					right={0}
					w={{ base: "0px", md: "500px" }}
					h={{ base: "0px", md: "500px" }}
					bg="#00C2CB"
					opacity={0.6}
					borderRadius="full"
					filter="blur(120px)"
				/>
				<Box
					position="absolute"
					bottom={0}
					left={0}
					w={{ base: "0px", md: "320px" }}
					h={{ base: "0px", md: "320px" }}
					bg="#0077FF"
					opacity={0.25}
					borderRadius="full"
					filter="blur(120px)"
				/>
			</Box>

			<Box
				maxW="6xl"
				mx="auto"
				position="relative"
				pt={{ base: 32, md: 40 }}
				pb={{ base: 20, md: 28 }}
				px={{ base: 6, md: 8 }}
			>
				<Grid templateColumns={{ base: "1fr", lg: "7fr 5fr" }} gap={{ base: 12, lg: 10 }} alignItems="center">
					<Box>
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
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
								color="#0D1B2A"
								mb={8}
							>
								<Box w={2} h={2} bg="#00C2CB" borderRadius="full" animation="pulse 2s infinite" />
								For businesses, organisations and personal brands
							</Box>
						</motion.div>

						<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
							<Heading
								as="h1"
								fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
								fontWeight="bold"
								lineHeight="shorter"
								mb={6}
								letterSpacing="tight"
								fontFamily="poppins"
								color="#0D1B2A"
							>
								Set up right.
								<br />
								<Box as="span" color="#00C2CB">
									Stand out.
								</Box>
								<br />
								Run smoothly.
							</Heading>
						</motion.div>

						<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
							<Text fontSize={{ base: "lg", md: "xl" }} color="#4A5568" maxW="2xl" mb={10} lineHeight="relaxed">
								Registration, branding, your website, Google, social media and the
								tools your business runs on, done properly by people who do this
								every day. Just starting or already running, you focus on
								delivering and selling. We handle the rest.
							</Text>
						</motion.div>

						<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
							<Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
								<ChakraLink href={whatsappLink} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: "none" }}>
									<Button
										w={{ base: "full", md: "auto" }}
										size="lg"
										bg="#0077FF"
										color="white"
										px={8}
										py={6}
										fontSize="base"
										borderRadius="full"
										transition="all 0.3s"
										_hover={{ bg: "#0066DD", transform: "translateY(-2px)" }}
										className="!shadow-lg !shadow-[#0077FF]/25"
									>
										<MessageCircle className="!w-4" />
										Start a Conversation
									</Button>
								</ChakraLink>

								<ChakraLink as={NextLink} href={ROUTES.services} _hover={{ textDecoration: "none" }}>
									<Button
										w={{ base: "full", md: "auto" }}
										variant="outline"
										borderWidth={1}
										color="#0D1B2A"
										bg="white"
										_hover={{ bg: "rgba(0, 119, 255, 0.08)" }}
										px={8}
										py={6}
										fontSize="base"
										borderRadius="full"
										className="!border-[#0D1B2A]/20"
									>
										See What We Do
										<ArrowRight className="!w-4 ml-2" />
									</Button>
								</ChakraLink>
							</Flex>

							<Flex
								mt={8}
								gap={{ base: 2, md: 5 }}
								direction={{ base: "column", md: "row" }}
								fontSize="sm"
								color="#4A5568"
							>
								<Flex align="center" gap={2}>
									<ShieldCheck size={16} color="#10B981" />
									Registered with the CAC (BN 8447100)
								</Flex>
								<Flex align="center" gap={2}>
									<BadgeCheck size={16} color="#10B981" />
									Building since 2021
								</Flex>
							</Flex>
						</motion.div>
					</Box>

					<Box display={{ base: "none", lg: "block" }}>
						<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
							<HeroVisual />
						</motion.div>
					</Box>
				</Grid>
			</Box>
		</Box>
	);
}
