"use client";
import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	VStack,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "@/components/ui/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const RecentWorkHeader = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			<Flex
				// textAlign="center"
				flexDir={{ base: "column", md: "row" }}
				alignItems={{ md: "flex-end" }}
				justifyContent={"space-between"}
				mb={12}
				// mb={16}
				gap={6}

				// className="md:items-end justify-between mb-12 gap-6"
			>
				<Box>
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
						// mb={4}
					>
						Recent Work
					</Heading>

					{/* 
					<Text color={"slate.600"} maxW="xl" mx="auto">
						Here are a few recent websites I've worked on and sample
						projects similar to what I build for clients.
					</Text> */}
				</Box>

				<ChakraLink href="/portfolio">
					<Button
						variant="outline"
						borderWidth={1}
						color={"#0D1B2A"}
						borderRadius="full"
						className="!border-[#0D1B2A]/20  !hover:bg-[#0D1B2A]/5 "
					>
						View All Projects{" "}
						<ArrowRight className="w-4 h-4 ml-2" />
					</Button>
				</ChakraLink>
			</Flex>
		</motion.div>
	);
};
