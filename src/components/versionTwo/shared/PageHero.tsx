"use client";
import React from "react";
import { motion } from "@/components/ui/motion";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function PageHero({
	eyebrow,
	title,
	intro,
	children,
}: {
	eyebrow: string;
	title: React.ReactNode;
	intro?: React.ReactNode;
	children?: React.ReactNode;
}) {
	return (
		<Box
			as="section"
			bg="white"
			borderBottom="1px solid"
			borderColor="slate.100"
			pt={{ base: 28, md: 36 }}
			pb={{ base: 12, md: 16 }}
		>
			<Container maxW="4xl" px={{ base: 6, md: 8 }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Text
						fontSize="sm"
						fontWeight="medium"
						letterSpacing="widest"
						textTransform="uppercase"
						color="#0077FF"
					>
						{eyebrow}
					</Text>
					<Heading
						as="h1"
						fontSize={{ base: "3xl", md: "5xl" }}
						fontWeight="bold"
						lineHeight="shorter"
						mt={3}
						mb={5}
						fontFamily="poppins"
						color="#0D1B2A"
					>
						{title}
					</Heading>
					{intro && (
						<Text fontSize={{ base: "md", md: "lg" }} color="#4A5568" maxW="3xl">
							{intro}
						</Text>
					)}
					{children}
				</motion.div>
			</Container>
		</Box>
	);
}
