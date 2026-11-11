"use client";
import React from "react";
import NextLink from "next/link";
import { ArrowLeft } from "lucide-react";
import { Box, Button, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ROUTES } from "@/data/routes";

export default function NoProject() {
	return (
		<Box minH="70vh" bg="#F5F7FA" display="flex" alignItems="center" justifyContent="center" px={6} pt={24}>
			<Box textAlign="center" maxW="md">
				<Heading as="h1" fontSize="2xl" fontFamily="poppins" color="#0D1B2A" mb={3}>
					Project not found
				</Heading>
				<Text color="#4A5568" mb={6}>
					This project may have moved or been taken down. See the rest of our work instead.
				</Text>
				<ChakraLink as={NextLink} href={ROUTES.portfolio} _hover={{ textDecoration: "none" }}>
					<Button bg="#0077FF" color="white" borderRadius="full" px={6} _hover={{ bg: "#0066DD" }}>
						<ArrowLeft size={16} />
						Back to our work
					</Button>
				</ChakraLink>
			</Box>
		</Box>
	);
}
