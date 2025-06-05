// src/components/Header.tsx
"use client";

import {
	Box,
	Flex,
	Heading,
	Link,
	Spacer,
	Button,
	Stack,
	Text,
	IconButton,
	Collapsible,
	CollapsibleTrigger,
	Icon,
	Container,
} from "@chakra-ui/react";
import { BiBraille, BiMoon, BiSun, BiX } from "react-icons/bi";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { useState } from "react";
import ColorThemeToggler from "./ColorThemeToggler";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false); // State for mobile menu

	const handleToggle = () => setIsOpen(!isOpen);

	return (
		<Box
			as="header"
			bg={"header.bg"}
			borderBottomWidth="1px"
			borderColor={"header.border"}
			boxShadow="sm"
			//
			position="sticky"
			top={0}
			// zIndex="banner"
			zIndex={100}
			//
			// initial={{ y: -100 }}
			// animate={{ y: 0 }}
			// transition={{ duration: 0.5 }}
		>
			<Collapsible.Root>
				<Container py={4}>
					<Flex alignItems="center">
						{/* <Heading as="h1" size="lg" color="brand.gray.darkGray">
					Ignite{" "}
					<Box as={"span"} style={{ color: "#00B5AD" }}>
						Dev
					</Box>
				</Heading> */}
						<Text
							fontSize="2xl"
							fontWeight="bold"
							color={"header.text"}
						>
							MIA
						</Text>

						<Spacer />

						{/* Desktop Navigation */}
						<Stack
							direction="row"
							gap={4}
							align="center"
							display={{ base: "none", md: "flex" }}
						>
							<Link
								href="#services"
								p={4}
								fontWeight="medium"
								color={"header.text"}
							>
								{/* Services */}
								Solutions
							</Link>

							<Link
								href="#about"
								p={4}
								fontWeight="medium"
								color={"header.text"}
							>
								{/* About Us */}
								Portfolio
							</Link>

							<Link
								href="#contact"
								p={4}
								fontWeight="medium"
								color={"header.text"}
							>
								Contact
							</Link>

							<Button
								bg={"header.button-bg"}
								color={"header.button-text"}
								_hover={{
									bg: "header.button-bg-hover",
								}}
								borderRadius="full"
								px={6}
								py={2}
								// colorScheme="teal" variant="solid"
							>
								Get Started
								{/* Get a Quote */}
							</Button>

							<ColorThemeToggler />
						</Stack>
						{/* <Spacer /> */}

						{/* Mobile Hamburger Menu */}
						<Collapsible.Trigger
							paddingBlock={3}
							display={{ base: "flex", md: "none" }}
							aria-label="Open menu"
							onClick={handleToggle}
							// variant="ghost"
						>
							{isOpen ? <BiX /> : <BiBraille />}
						</Collapsible.Trigger>
					</Flex>
				</Container>

				{/* Mobile Menu Collapse */}
				<Collapsible.Content>
					<Box
						p={4}
						display={{ base: "block", md: "none" }}
						bg={"header.bg"}
						mt={2}
						borderRadius="md"
						shadow="md"
					>
						<Stack as="nav" gap={4}>
							<Link
								href="#services"
								p={4}
								fontWeight="medium"
								color={"header.text"}
							>
								{/* Services */}
								Solutions
							</Link>

							<Link
								href="#about"
								p={4}
								fontWeight="medium"
								color={"header.text"}
							>
								{/* About Us */}
								Portfolio
							</Link>

							<Link
								href="#contact"
								p={4}
								fontWeight="medium"
								color={"header.text"}
							>
								Contact
							</Link>

							<Button
								bg={"header.button-bg"}
								color={"header.button-text"}
								_hover={{
									bg: "header.button-bg-hover",
								}}
								borderRadius="full"
								px={6}
								py={2}
								// colorScheme="teal" variant="solid"
							>
								{/* Get Started */}
								Get a Quote
							</Button>
							<ColorThemeToggler />
						</Stack>
					</Box>
				</Collapsible.Content>
			</Collapsible.Root>
		</Box>
	);
};
