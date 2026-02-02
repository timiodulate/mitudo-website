"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Layout } from "lucide-react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function WhatsIncluded({ project }: { project: any }) {
	return (
		<Box as="section" py={{ base: 16, md: 20 }} px={6} bg="white">
			<Box maxW="5xl" mx="auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Flex alignItems="center" gap={3} mb={6}>
						<Box
							w={12}
							h={12}
							borderRadius="xl"
							bg="rgba(0, 194, 203, 0.1)"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Layout
								className="w-6 h-6"
								style={{ color: "#00C2CB" }}
							/>
						</Box>
						<Heading
							as="h2"
							fontFamily="heading"
							fontSize={{ base: "2xl", md: "3xl" }}
							fontWeight="bold"
							color="#0D1B2A"
						>
							What the Website Includes
						</Heading>
					</Flex>
					<VStack gap={3} align="stretch">
						{project.includes.map((item: any, index: number) => (
							<Flex
								key={index}
								alignItems="flex-start"
								gap={3}
								p={4}
								bg="#F5F7FA"
								borderRadius="xl"
							>
								<Box mt={0.5} flexShrink={0}>
									<CheckCircle
										className="w-5 h-5"
										style={{ color: "#0077FF" }}
									/>
								</Box>
								<Text color="#4A5568">{item}</Text>
							</Flex>
						))}
					</VStack>
				</motion.div>
			</Box>
		</Box>
	);
}
