"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Box, Heading, Text, Button, Link as ChakraLink } from "@chakra-ui/react";

export default function Hero({ project }: { project: any }) {
	return (
		<Box
			as="section"
			bgGradient="to-br"
			gradientFrom="#0D1B2A"
			gradientVia="#142535"
			gradientTo="#0D1B2A"
			color="white"
			pt={{ base: 28, md: 32 }}
			pb={{ base: 16, md: 24 }}
			px={6}
		>
			<Box maxW="5xl" mx="auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Text
						color="#00C2CB"
						fontWeight="medium"
						fontSize="sm"
						textTransform="uppercase"
						letterSpacing="0.05em"
					>
						{project.type}
					</Text>
					<Heading
						as="h1"
						fontSize={{ base: "3xl", md: "5xl" }}
						fontWeight="bold"
						mt={3}
						mb={6}
						fontFamily="heading"
					>
						{project.title}
					</Heading>
					<Text
						fontSize="lg"
						color="#A0AEC0"
						maxW="3xl"
						mb={8}
					>
						{project.shortDescription}
					</Text>

					{project.liveUrl && (
						<ChakraLink
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "none" }}
						>
							<Button
								size="lg"
								bg="#0077FF"
								color="white"
								px={8}
								py={6}
								borderRadius="full"
								_hover={{ bg: "#0066DD" }}
							>
								<ExternalLink className="w-5 h-5" style={{ marginRight: "0.5rem" }} />
								View Live Website
							</Button>
						</ChakraLink>
					)}
				</motion.div>
			</Box>
		</Box>
	);
}
