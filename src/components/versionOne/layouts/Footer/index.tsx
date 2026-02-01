// src/components/Footer.tsx
import Logo from "@/components/shared/Logo";
import {
	Box,
	Flex,
	Text,
	Link,
	Spacer,
	Container,
	Stack,
} from "@chakra-ui/react";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

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
					//
					borderBottomWidth="1px"
					borderColor={"footer.border"}
				>
					{/* Left: Logo */}
					<Flex
						direction={"column"}
						textAlign={{ base: "center", md: "left" }}
						// hideBelow={"md"}
						gap={3}
					>
						<Logo />
						{/* <Text
							// color={"footer.text"}
							// mb={2}
						>
							MIA
						</Text> */}

						<Text color={"footer.text"}>
							Innovative solutions for your digital needs.
						</Text>

						<Stack direction={"row"} gap={5}>
							<Link href="#" color={"footer.link"}>
								<FaLinkedinIn size={19} />
							</Link>
							<Link href="#" color={"footer.link"}>
								<BsTwitterX size={16} />
							</Link>
							<Link
								href="https://www.instagram.com/mitudo_agency/"
								target="_blank"
								color={"footer.link"}
							>
								<BsInstagram size={16} />
							</Link>
						</Stack>
					</Flex>

					{/* Right: Navigation Links */}
					<Flex
						width={{ mdDown: "100%" }}
						direction={{ base: "row", md: "row" }}
						gap={{ base: 4, md: 16 }}
						textAlign={{ base: "left", md: "left" }}
						flexWrap={"wrap"}
					>
						<Stack gap={2} flex={1} flexBasis={{ mdDown: "40%" }}>
							<Text fontWeight="bold" color={"footer.text"}>
								Company
							</Text>
							<Link href="#" color={"footer.link"}>
								About Us
							</Link>
							<Link href="#" color={"footer.link"}>
								Services
							</Link>
							<Link href="#" color={"footer.link"}>
								Portfolio
							</Link>
						</Stack>

						<Stack gap={2} flex={1} flexBasis={{ mdDown: "40%" }}>
							<Text fontWeight="bold" color={"footer.text"}>
								Support
								{/* Solutions  */}
							</Text>
							<Link href="#" color={"footer.link"}>
								{/* Web Solutions */}
								Contact
							</Link>
							<Link href="#" color={"footer.link"}>
								{/* Mobile Development */}
								FAQs
							</Link>
							<Link href="#" color={"footer.link"}>
								Help Center
							</Link>
						</Stack>

						<Stack gap={2} flex={1} flexBasis={{ mdDown: "100%" }}>
							<Text fontWeight="bold" color={"footer.text"}>
								Connect
							</Text>
							<Link
								href="mailto:mitudoagency.0@gmail.com"
								color={"footer.link"}
								target="_blank"
							>
								mitudoagency.0@gmail.com
							</Link>
							<Link
								href="https://wa.me/message/ZLLYAMBC6FPBN1"
								color={"footer.link"}
								target="_blank"
							>
								WA: +2348147697225
							</Link>
						</Stack>
					</Flex>
				</Flex>

				<Box
					pt={8}
					// justify={{ base: "center", md: "flex-end" }}

					// gap={1}

					ml={{ md: "auto" }}
					w={"fit-content"}
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
