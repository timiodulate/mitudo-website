"use client";

// src/components/Hero.tsx
import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export const Hero = () => {
	return (
		<Box
			as="section"
			id={`hero`}
			bg={"hero.bg"}
			h={"fit-content"}
			borderRadius="xl"
			overflow={`hidden`}
		>
			<Container
				// centerContent
				py={{ base: 12, md: 20 }}
				// py={{ base: "20", md: "28" }}
				// my={8}
				//
				// initial={{ opacity: 0, scale: 0.95 }}
				// animate={{ opacity: 1, scale: 1 }}
				// transition={{ duration: 0.8, delay: 0.2 }}
			>
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="space-between"
					gap={{ base: 8, md: 16 }}
				>
					{/* Left Content */}
					<Box textAlign={{ base: "center", md: "left" }} flex={1}>
						<Heading
							// 			size="3xl"
							as="h2"
							fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
							fontWeight="extrabold"
							lineHeight="shorter"
							mb={4}
							color={"hero.text"}

							// initial={{ x: -50, opacity: 0 }}
							// animate={{ x: 0, opacity: 1 }}
							// transition={{ duration: 0.6, delay: 0.4 }}
						>
							Innovate . Connect . Grow .
						</Heading>

						<Text
							fontSize={{ base: "lg", md: "xl" }}
							maxW="lg"
							//   maxW="2xl"
							mx={{ base: "auto", md: "0" }}
							mb={8}
							color={"hero.text"}
							// initial={{ x: -50, opacity: 0 }}
							// animate={{ x: 0, opacity: 1 }}
							// transition={{ duration: 0.6, delay: 0.6 }}
						>
							We deliver custom digital solution that power growth
							and transform industries. Your vision, engineered
							with precision.
						</Text>

						<Button
							//   colorScheme="teal"
							//   variant="solid"
							//   px={10}
							//   py={8}
							bg={"hero.button-bg"}
							color={"hero.button-text"}
							_hover={{
								bg: "hero.button-bg-hover",
							}}
							borderRadius="full"
							size="lg"
							px={8}
							py={6}
							// initial={{ y: 20, opacity: 0 }}
							// animate={{ y: 0, opacity: 1 }}
							// transition={{ duration: 0.6, delay: 0.8 }}
						>
							Get Started
						</Button>
					</Box>

					{/* Right Illustration Placeholder */}
					<Flex
						flex={1}
						justifyContent="center"
						alignItems="center"
						//   initial={{ x: 50, opacity: 0 }}
						//   animate={{ x: 0, opacity: 1 }}
						//   transition={{ duration: 0.6, delay: 0.4 }}
					>
						{/* Placeholder for the illustration */}
						<Box
							w={{ base: "250px", md: "350px", lg: "450px" }}
							h={{ base: "200px", md: "280px", lg: "360px" }}
							// Updated to use the new 'purple' color names
							bg={useColorModeValue("purple.200", "purple.700")}
							borderRadius="xl"
							display="flex"
							alignItems="center"
							justifyContent="center"
							fontSize="xl"
							fontWeight="bold"
							// Updated to use the new 'purple' color names
							color={useColorModeValue(
								"purple.800",
								"purple.200"
							)}
							textAlign="center"
							p={4}
						>
							Illustration Placeholder
							{/* You would replace this Box with an actual SVG or image component */}
						</Box>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};
