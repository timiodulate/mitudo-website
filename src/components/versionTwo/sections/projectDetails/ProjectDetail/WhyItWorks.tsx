"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe } from "lucide-react";
import { Box, Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";

export default function WhyIWorks({ project }: { project: any }) {
	return (
		<Box as="section" py={{ base: 16, md: 20 }} px={6}>
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
							bg="rgba(0, 119, 255, 0.1)"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Globe
								className="w-6 h-6"
								style={{ color: "#0077FF" }}
							/>
						</Box>
						<Heading
							as="h2"
							fontFamily="heading"
							fontSize={{ base: "2xl", md: "3xl" }}
							fontWeight="bold"
							color="#0D1B2A"
						>
							Why This Website Works
						</Heading>
					</Flex>
					<Text color="#718096" mb={6}>
						A well-structured website like this helps the business:
					</Text>
					<Grid
						templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
						gap={4}
					>
						{project.whyItWorks.map((item: any, index: string) => (
							<GridItem
								key={index}
								display="flex"
								alignItems="flex-start"
								gap={3}
								p={4}
								bg="white"
								borderRadius="xl"
								border="1px solid"
								borderColor="#E2E8F0"
							>
								<Box mt={0.5} flexShrink={0}>
									<CheckCircle
										className="w-5 h-5"
										style={{ color: "#00C2CB" }}
									/>
								</Box>
								<Text color="#4A5568">{item}</Text>
							</GridItem>
						))}
					</Grid>
				</motion.div>
			</Box>
		</Box>
	);
}
