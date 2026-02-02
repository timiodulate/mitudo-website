"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

export default function ProjectImage({ project }: { project: any }) {
	return (
		<Box as="section" px={6} mt={-8}>
			<Box maxW="5xl" mx="auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Image
						src={project.image}
						alt={project.title}
						w="full"
						h={{ base: "16rem", md: "24rem" }}
						objectFit="cover"
						borderRadius="2xl"
						shadow="2xl"
					/>
				</motion.div>
			</Box>
		</Box>
	);
}
