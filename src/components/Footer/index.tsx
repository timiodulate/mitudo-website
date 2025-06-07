// src/components/Footer.tsx
import {
	Box,
	Flex,
	Text,
	Link,
	Spacer,
	Container,
	Stack,
} from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Box
			as="footer"
			bg={"footer.bg"}
			borderTopWidth="1px"
			borderColor={"footer.border"}

			// initial={{ opacity: 0, y: 50 }}
			// whileInView={{ opacity: 1, y: 0 }}
			// viewport={{ once: true }}
			// transition={{ duration: 0.8 }}
		>
			<Container
				py={8}
				// py={{ base: 12, md: 20 }}
			>
				<Flex
					direction={{ base: "column", md: "row" }}
					justify="space-between"
					align={{ base: "center", md: "flex-start" }}
					gap={8}
					pb={8}
				>
					{/* Left: Logo */}
					<Box textAlign={{ base: "center", md: "left" }}>
						<Text
							fontSize="2xl"
							fontWeight="bold"
							color={"footer.text"}
							mb={2}
						>
							MIA
						</Text>
					</Box>

					{/* Right: Navigation Links */}
					<Flex
						direction={{ base: "column", md: "row" }}
						gap={{ base: 4, md: 16 }}
						textAlign={{ base: "center", md: "left" }}
					>
						<Stack gap={2}>
							<Text fontWeight="bold" color={"footer.text"}>
								Solutions
							</Text>
							<Link href="#" color={"footer.link"}>
								Web Solutions
							</Link>
							<Link href="#" color={"footer.link"}>
								Custom Software
							</Link>
							<Link href="#" color={"footer.link"}>
								Mobile Development
							</Link>
						</Stack>
						<Stack gap={2}>
							<Text fontWeight="bold" color={"footer.text"}>
								Company
							</Text>
							<Link href="#" color={"footer.link"}>
								About Us
							</Link>
							<Link href="#" color={"footer.link"}>
								Blog
							</Link>
							<Link href="#" color={"footer.link"}>
								Contact
							</Link>
						</Stack>
						<Stack gap={2}>
							<Text fontWeight="bold" color={"footer.text"}>
								Privacy Policy
							</Text>
							<Link href="#" color={"footer.link"}>
								Privacy Policy
							</Link>
							<Link href="#" color={"footer.link"}>
								Terms of Service
							</Link>
						</Stack>
					</Flex>
				</Flex>

				<Flex
					pt={8}
					justify="flex-end"
					borderTopWidth="1px"
					borderColor={"footer.border"}
					gap={1}
				>
					<Text fontSize="sm" color={"footer.link"} textAlign="right">
						© {new Date().getFullYear()} MIA. All rights reserved.
					</Text>{" "}
					<Text
						fontSize="sm"
						color={"footer.link"}
						textAlign="right"
						gap={1}
					>
						Designed and built by{" "}
						<Link
							href="https://timiodulatelinks.netlify.app/"
							target={"_blank"}
							color={"footer.text"}
						>
							timiodulate
						</Link>{" "}
						.
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};
