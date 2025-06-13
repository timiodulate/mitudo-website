"use client";

// src/components/Hero.tsx
import { Box, Heading, Text, Button, Container, Flex } from "@chakra-ui/react";
import { heroIllustration } from "@/images";
import Image from "next/image";

export const Hero = () => {
	return (
		<Box
			as="section"
			id={`hero`}
			bg={"hero.bg"}
			h={{ base: `calc(100vh - 75px)`, md: "fit-content" }}
			borderRadius="xl"
			overflow={`hidden`}
			display={`flex`}
			alignItems={`center`}
		>
			<Container
				// centerContent
				py={{ base: 12, md: 20 }}
				// py={{ base: "20", md: "28" }}
				// my={8}
				animation="heroBg"
			>
				<Flex
					direction={{ base: "column", md: "row" }}
					align="center"
					justify="space-between"
					gap={{ base: 8, md: 16 }}
				>
					{/* Left Content */}
					<Flex
						direction={`column`}
						gap={`4`}
						textAlign={{ base: "center", md: "left" }}
						flex={1}
					>
						<Heading
							// 			size="3xl"
							as="h2"
							fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
							fontWeight="bold"
							lineHeight="shorter"
							color={"hero.text"}
							animation="heroHeading"
						>
							Innovate. Connect. Grow.
						</Heading>

						<Text
							fontSize={{ base: "lg", md: "xl" }}
							maxW="lg"
							//   maxW="2xl"
							mx={{ base: "auto", md: "0" }}
							color={"hero.text"}
							animation="heroText"
						>
							We deliver custom digital solution that power growth
							and transform businesses. Your vision, engineered
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
							width={{ base: `full`, md: `fit` }}
							minWidth={{ base: `_`, md: `70%` }}
							animation="heroBtn"
						>
							See Our Work
						</Button>
					</Flex>

					{/* Right Illustration Placeholder */}
					<Flex
						flex={1}
						justifyContent="center"
						alignItems="center"
						animation="heroIllustration"
						hideBelow={`md`}
					>
						<Image
							src={heroIllustration}
							alt="Picture of the author"
							// width={500} automatically provided
							// height={500} automatically provided
							// blurDataURL="data:..." automatically provided
							// placeholder="blur" // Optional blur-up while loading
							// w={{ base: "250px", md: "350px", lg: "450px" }}
							// h={{ base: "200px", md: "280px", lg: "360px" }}
						/>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};
