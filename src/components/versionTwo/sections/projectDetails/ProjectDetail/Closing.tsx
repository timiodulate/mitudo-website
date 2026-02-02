"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Box, Text, Button, Flex, Link as ChakraLink } from "@chakra-ui/react";

export default function Closing({ project }: { project: any }) {
	return (
		<Box
			as="section"
			py={{ base: 16, md: 20 }}
			px={6}
			bgGradient="to-br"
			gradientFrom="#0D1B2A"
			gradientTo="#142535"
			color="white"
		>
			<Box maxW="3xl" mx="auto" textAlign="center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Text
						fontFamily="heading"
						fontSize={{ base: "xl", md: "2xl" }}
						color="#A0AEC0"
						mb={8}
					>
						{project.closingLine}
					</Text>
					<Flex
						flexDirection={{ base: "column", sm: "row" }}
						gap={4}
						justifyContent="center"
					>
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
									<ExternalLink
										className="w-5 h-5"
										style={{ marginRight: "0.5rem" }}
									/>
									View Live Website
								</Button>
							</ChakraLink>
						)}
						<Link href="#contact">
							<Button
								size="lg"
								bg="transparent"
								color="white"
								px={8}
								py={6}
								borderRadius="full"
								border="1px solid"
								borderColor="rgba(0, 194, 203, 0.3)"
								_hover={{ bg: "rgba(0, 194, 203, 0.1)" }}
							>
								Start Your Project
							</Button>
						</Link>
					</Flex>
				</motion.div>
			</Box>
		</Box>
	);
}
