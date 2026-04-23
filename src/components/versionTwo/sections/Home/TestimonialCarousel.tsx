"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "@/components/ui/motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const testimonials = [
	{
		name: "Emeka Okafor",
		business: "D'Glides Apartments",
		role: "CEO",
		text: "Mitudo Agency transformed how my real estate business looks online. Within weeks of launching, I started getting serious enquiries from people who found us on Google. The website looks exactly like what I imagined — professional and trustworthy.",
		rating: 5,
	},
	{
		name: "Chidinma Adeyemi",
		business: "Bright Minds Academy",
		role: "Director",
		text: "We had no online presence before Mitudo stepped in. Now we have a website, a professional email, and a Google Business listing. Parents tell us they found us online and felt confident reaching out because we looked established.",
		rating: 5,
	},
	{
		name: "Tunde Balogun",
		business: "SwiftMove Logistics",
		role: "Founder",
		text: "I was skeptical at first, but the results speak for themselves. Our brand identity is sharp, our website is clean, and clients treat us more seriously now. Mitudo helped us look like the company we always knew we were.",
		rating: 5,
	},
];

const variants = {
	enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
	center: { opacity: 1, x: 0 },
	exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function TestimonialCarousel() {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	const go = (dir: number) => {
		setDirection(dir);
		setCurrent(
			(prev) => (prev + dir + testimonials.length) % testimonials.length,
		);
	};

	return (
		<Box
			as="section"
			id="testimonials"
			py={{ base: 20, md: 28 }}
			// bg="#F5F7FA"
			bg="#ffffff"
			// px={6}
		>
			<Container maxW="6xl" px={{ base: 6, md: 8 }}>
				<Box textAlign="center" mb={14}>
					<Text
						fontSize="sm"
						fontWeight="medium"
						letterSpacing="wider"
						textTransform="uppercase"
						color="#0077FF"
					>
						Testimonials
					</Text>
					<Heading
						as="h2"
						fontSize={{ base: "3xl", md: "4xl" }}
						fontWeight="bold"
						color="#0D1B2A"
						mt={3}
						fontFamily="poppins"
					>
						What Clients Say
					</Heading>
				</Box>

				<Box
					position="relative"
					bg="white"
					borderRadius="3xl"
					border="1px solid"
					borderColor="slate.200"
					boxShadow="sm"
					p={{ base: 8, md: 12 }}
					minH="260px"
					overflow="hidden"
				>
					<Box
						position="absolute"
						top={0}
						left={0}
						w={1}
						h="full"
						bgGradient="to-b"
						gradientFrom="#0077FF"
						gradientTo="#00C2CB"
						borderRadius="full"
					/>

					<AnimatePresence custom={direction} mode="wait">
						<motion.div
							key={current}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.35, ease: "easeInOut" }}
						>
							<Box pl={4}>
								<Flex gap={1} mb={5}>
									{Array.from({
										length: testimonials[current].rating,
									}).map((_, index) => (
										<Star
											key={index}
											className="w-5 h-5 text-[#00C2CB] fill-[#00C2CB]"
										/>
									))}
								</Flex>

								<Text
									fontSize={{ md: "md" }}
									color="#4A5568"
									lineHeight="tall"
									mb={6}
								>
									“{testimonials[current].text}”
								</Text>

								<Flex align="center" gap={4}>
									<Box
										w={10}
										h={10}
										borderRadius="full"
										bgGradient="to-br"
										gradientFrom="#0077FF"
										gradientTo="#00C2CB"
										display="flex"
										alignItems="center"
										justifyContent="center"
										color="white"
										fontWeight="bold"
										fontFamily="poppins"
									>
										{testimonials[current].name.charAt(0)}
									</Box>

									<Box>
										<Text
											fontWeight="semibold"
											color="#0D1B2A"
											fontFamily="poppins"
											fontSize="sm"
										>
											{testimonials[current].name}
										</Text>
										<Text color="slate.500" fontSize="sm">
											{testimonials[current].role},{" "}
											{testimonials[current].business}
										</Text>
									</Box>
								</Flex>
							</Box>
						</motion.div>
					</AnimatePresence>
				</Box>

				<Flex align="center" justify="center" gap={6} mt={8}>
					<Button
						onClick={() => go(-1)}
						variant="outline"
						size="lg"
						borderColor="slate.300"
						color="#0D1B2A"
						_hover={{ borderColor: "#0077FF", color: "#0077FF" }}
						w="10"
						h="10"
					>
						<ChevronLeft className="!w-4 h-4" />
					</Button>

					<Flex gap={2}>
						{testimonials.map((_, index) => (
							<Box
								as="button"
								key={index}
								onClick={() => {
									setDirection(index > current ? 1 : -1);
									setCurrent(index);
								}}
								w={index === current ? 6 : 2}
								h={2}
								bg={index === current ? "#0077FF" : "slate.300"}
								borderRadius="full"
								transition="all 0.2s"
								_hover={{
									bg:
										index === current
											? "#0066DD"
											: "slate.400",
								}}
								aria-label={`Show testimonial ${index + 1}`}
							/>
						))}
					</Flex>

					<Button
						onClick={() => go(1)}
						variant="outline"
						size="lg"
						borderColor="slate.300"
						color="#0D1B2A"
						_hover={{ borderColor: "#0077FF", color: "#0077FF" }}
						w="10"
						h="10"
					>
						<ChevronRight className="!w-4 h-4" />
					</Button>
				</Flex>
			</Container>
		</Box>
	);
}
