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
} from "@chakra-ui/react";
import { BiBraille, BiMoon, BiSun, BiX } from "react-icons/bi";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { useState } from "react";

export const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("white", "gray.900");
	const textColor = useColorModeValue("gray.800", "white");
	// Updated to use the new 'black' and 'white' color names
	const buttonBg = useColorModeValue("black", "white");
	const buttonColor = useColorModeValue("white", "black");

	const [isOpen, setIsOpen] = useState(false); // State for mobile menu

	const handleToggle = () => setIsOpen(!isOpen);

	return (
		<Box
			as="header"
			bg={bgColor}
			px={{ base: 4, md: 8 }}
			py={4}
			borderBottomWidth="1px"
			borderColor={useColorModeValue("gray.200", "gray.700")}
			boxShadow="sm"
			position="sticky"
			top={0}
			// zIndex="banner"
			zIndex={100}

			// initial={{ y: -100 }}
			// animate={{ y: 0 }}
			// transition={{ duration: 0.5 }}
		>
			<Flex alignItems="center">
				{/* <Heading as="h1" size="lg" color="brand.gray.darkGray">
					Ignite{" "}
					<Box as={"span"} style={{ color: "#00B5AD" }}>
						Dev
					</Box>
				</Heading> */}
				<Text fontSize="2xl" fontWeight="bold" color={textColor}>
					MIA
				</Text>
				<Spacer />

				{/* Desktop Navigation */}
				<Stack
					direction="row"
					spacing={8}
					align="center"
					display={{ base: "none", md: "flex" }}
				>
					<Link
						href="#services"
						p={4}
						fontWeight="medium"
						color={textColor}
					>
						{/* Services */}
						Solutions
					</Link>
					<Link
						href="#about"
						p={4}
						fontWeight="medium"
						color={textColor}
					>
						{/* About Us */}
						Portfolio
					</Link>
					<Link
						href="#contact"
						p={4}
						fontWeight="medium"
						color={textColor}
					>
						Contact
					</Link>

					<Button
						bg={buttonBg}
						color={buttonColor}
						_hover={{
							bg: useColorModeValue("gray.700", "gray.200"),
						}}
						borderRadius="full"
						px={6}
						py={2}
					>
						Get Started
					</Button>
					<IconButton
						aria-label="Toggle color mode"
						icon={colorMode === "light" ? <BiMoon /> : <BiSun />}
						onClick={toggleColorMode}
						variant="ghost"
						borderRadius="full"
					/>
				</Stack>
				{/* <Spacer /> */}

				{/* <Button colorScheme="teal" variant="solid">
					Get a Quote
				</Button> */}

				{/* Mobile Hamburger Menu */}
				<IconButton
					display={{ base: "flex", md: "none" }}
					aria-label="Open menu"
					icon={isOpen ? <BiX /> : <BiBraille />}
					onClick={handleToggle}
					variant="ghost"
				/>
			</Flex>

			{/* Mobile Menu Collapse */}
			{/* <Collapsible in={isOpen} animateOpacity>
				<Box
					p={4}
					display={{ base: "block", md: "none" }}
					bg={bgColor}
					mt={2}
					borderRadius="md"
					shadow="md"
				>
					<Stack as="nav" spacing={4}>
						<Text color={textColor}>Solutions</Text>
						<Text color={textColor}>Portfolio</Text>
						<Text color={textColor}>Contact</Text>
						<Button
							bg={buttonBg}
							color={buttonColor}
							_hover={{
								bg: useColorModeValue("gray.700", "gray.200"),
							}}
							borderRadius="full"
							px={6}
							py={2}
						>
							Get Started
						</Button>
						<IconButton
							aria-label="Toggle color mode"
							icon={
								colorMode === "light" ? <BiMoon /> : <BiSun />
							}
							onClick={toggleColorMode}
							variant="ghost"
							borderRadius="full"
						/>
					</Stack>
				</Box>
			</Collapsible> */}
		</Box>
	);
};
