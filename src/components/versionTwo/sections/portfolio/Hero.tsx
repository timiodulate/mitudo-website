"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Icon,
	Image,
	Link as ChakraLink,
	Stack,
	Text,
} from "@chakra-ui/react";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

export default function HeroSection() {
	return (
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
						Our Work
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
						Businesses We&apos;ve
						<br />
						Made Look Legit
					</Heading>{" "}
					<Text fontSize="lg" color="#4A5568" maxW="3xl" mx="auto">
						Real websites and concept designs showing how we help
						businesses go from invisible to credible and findable
						online.
					</Text>
				</motion.div>
			</Container>
		</Box>
	);
}
