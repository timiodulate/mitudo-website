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
import { BiBraille, BiMenu, BiMoon, BiSun, BiX } from "react-icons/bi";
import { useState } from "react";
import ColorThemeToggler from "./ColorThemeToggler";
import Logo from "@/components/shared/Logo";

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
			animation="headerBg"
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
						<Logo />

						<Spacer />

						{/* Desktop Navigation */}
						<Stack
							direction="row"
							gap={4}
							align="center"
							display={{ base: "none", md: "flex" }}
						>
							<Navigation />

							<ColorThemeToggler />
						</Stack>
						{/* <Spacer /> */}

						{/* Mobile Hamburger Menu */}
						<Stack
							direction="row"
							gap={4}
							align="center"
							// display={{ base: "none", md: "flex" }}
							display={{ base: "flex", md: "none" }}
						>
							<ColorThemeToggler />

							{/* <Navigation /> */}
							<Collapsible.Trigger
								paddingBlock={3}
								aria-label="Open menu"
								onClick={handleToggle}
								// variant="ghost"
								fontSize={"2xl"}
							>
								{isOpen ? <BiX /> : <BiMenu />}
							</Collapsible.Trigger>
						</Stack>
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
							<Navigation />

							<Box hideBelow={"md"}>
								<ColorThemeToggler />
							</Box>
						</Stack>
					</Box>
				</Collapsible.Content>
			</Collapsible.Root>
		</Box>
	);
};

const Navigation = () => {
	return (
		<>
			<Link
				href="#services"
				p={4}
				fontWeight="medium"
				color={"header.text"}
			>
				Services
				{/* Solutions */}
			</Link>
			<Link
				// href="#about"
				href="#portfolio"
				p={4}
				fontWeight="medium"
				color={"header.text"}
			>
				{/* About Us */}
				Portfolio
			</Link>
			<Link
				// href="#contact"
				href="#cta"
				p={4}
				fontWeight="medium"
				color={"header.text"}
			>
				Contact
			</Link>

			<Link href="https://wa.me/message/ZLLYAMBC6FPBN1" target="_blank">
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
			</Link>
		</>
	);
};
