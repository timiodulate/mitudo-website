import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box as="footer" bg="#0A1421" py={8} px={6} textAlign="center">
			<Container maxW="6xl">
				<Text color="slate.500" fontSize="sm">
					© {new Date().getFullYear()} Mitudo Agency. All rights reserved.
				</Text>
			</Container>
		</Box>
	);
}
