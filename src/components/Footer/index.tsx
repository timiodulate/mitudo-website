// src/components/Footer.tsx
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Box bg="brand.gray.darkGray" color="white" py={10}>
			<Flex
				px={8}
				direction={{ base: "column", md: "row" }}
				align="center"
			>
				<Text>
					&copy; {new Date().getFullYear()} IgniteDev. All Rights
					Reserved.
				</Text>
				<Spacer />
				<Box>
					<Link href="#" p={2}>
						Privacy Policy
					</Link>
					<Link href="#" p={2}>
						Terms of Service
					</Link>
				</Box>
			</Flex>
		</Box>
	);
};
