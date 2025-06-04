// src/components/Hero.tsx
import {
	Box,
	Heading,
	Text,
	Button,
	VStack,
	Container,
} from "@chakra-ui/react";

export const Hero = () => {
	return (
		<Container
			maxW="container.xl"
			centerContent
			py={{ base: "20", md: "28" }}
		>
			<VStack gap={6} textAlign="center">
				<Box
					animation="moBox1"
					// initial={{ y: -20, opacity: 0 }}
					// animate={{ y: 0, opacity: 1 }}
					// transition={{ duration: 0.8 }}
				>
					<Heading
						as="h2"
						size="3xl"
						fontWeight="bold"
						color="brand.gray.darkGray"
					>
						Building the Future, One Line of Code at a Time.
					</Heading>
				</Box>
				<Box
					animation="moBox2"

					// initial={{ y: -20, opacity: 0 }}
					// animate={{ y: 0, opacity: 1 }}
					// transition={{ duration: 0.8, delay: 0.2 }}
				>
					<Text
						fontSize="xl"
						color="brand.gray.mediumGray"
						maxW="2xl"
					>
						We deliver cutting-edge custom software, mobile apps,
						and web solutions that power growth and transform
						industries. Your vision, engineered with precision.
					</Text>
				</Box>
				<Box
					animation="moBox3"

					// initial={{ scale: 0.8, opacity: 0 }}
					// animate={{ scale: 1, opacity: 1 }}
					// transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Button
						size="lg"
						colorScheme="teal"
						variant="solid"
						px={10}
						py={8}
					>
						Start Your Project
					</Button>
				</Box>
			</VStack>
		</Container>
	);
};
