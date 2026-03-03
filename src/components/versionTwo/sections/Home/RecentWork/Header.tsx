"use client";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "@/components/ui/motion";

export const RecentWorkHeader = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<VStack m={4} textAlign="center" mb={16}>
				<Text
					fontSize="sm"
					fontWeight="medium"
					letterSpacing="wider"
					textTransform="uppercase"
					color="#0077FF"
				>
					Portfolio
				</Text>

				<Heading
					as="h2"
					fontSize={{ base: "3xl", md: "4xl" }}
					fontWeight="bold"
					color={"#0d1b2a"}
					fontFamily="poppins"
					mt={3}
					mb={4}
				>
					Recent Work
				</Heading>

				<Text color={"slate.600"} maxW="xl" mx="auto">
					Here are a few recent websites I've worked on and sample
					projects similar to what I build for clients.
				</Text>
			</VStack>
		</motion.div>
	);
};
