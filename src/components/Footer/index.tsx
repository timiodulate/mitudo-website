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
					justify={{ md: "space-between" }}
					align={{ base: "flex-start", md: "flex-start" }}
					gap={8}
					pb={8}
				>
					{/* Left: Logo */}
					<Box
						textAlign={{ base: "center", md: "left" }}
						hideBelow={"md"}
					>
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
						textAlign={{ base: "left", md: "left" }}
					>
						<Stack gap={2}>
							<Text fontWeight="bold" color={"footer.text"}>
								Services
								{/* Solutions  */}
							</Text>
							<Link href="#" color={"footer.link"}>
								{/* Web Solutions */}
								Website Development
							</Link>
							<Link href="#" color={"footer.link"}>
								{/* Mobile Development */}
								Mobile App Development
							</Link>
							<Link href="#" color={"footer.link"}>
								Custom Software
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

				<Box
					pt={8}
					// justify={{ base: "center", md: "flex-end" }}
					borderTopWidth="1px"
					borderColor={"footer.border"}
					// gap={1}

					ml={{ base: "_", md: "auto" }}
				>
					<Text
						as={"span"}
						fontSize="sm"
						color={"footer.link"}
						textAlign="right"
					>
						© {new Date().getFullYear()} MIA. All rights reserved.
					</Text>{" "}
					<Text
						as={"span"}
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
				</Box>
			</Container>
		</Box>
	);
};
