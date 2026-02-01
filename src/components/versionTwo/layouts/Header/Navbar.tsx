"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import {
	Button,
	Box,
	Flex,
	Container,
	Link as ChakraLink,
} from "@chakra-ui/react";
import MobileNav from "./MobileNavigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: "Work", href: "#work" },
		{ label: "Services", href: "#services" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<Box
			as="nav"
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={50}
			transition="all 0.3s"
			bg={scrolled ? "rgba(13, 27, 42, 0.95)" : "transparent"}
			backdropFilter={scrolled ? "blur(10px)" : "none"}
			boxShadow={scrolled ? "lg" : "none"}
		>
			<Container maxW="6xl" py={0} mx={"auto"} px={{ base: 6 }}>
				<Flex justify="space-between" align="center" h={20}>
					{/* Logo */}
					<ChakraLink href="#" _hover={{ textDecoration: "none" }}>
						<Box
							fontSize="xl"
							fontWeight="bold"
							color="white"
							fontFamily="poppins"
						>
							MitudoA
							<Box as="span" color="#00C2CB">
								.
							</Box>
						</Box>
					</ChakraLink>

					{/* Desktop Navigation */}
					<Flex
						align="center"
						gap={8}
						display={{ base: "none", md: "flex" }}
					>
						{navLinks.map((link) => (
							<ChakraLink
								key={link.label}
								href={link.href}
								fontSize="sm"
								fontWeight="medium"
								color="slate.300"
								_hover={{
									color: "#00C2CB",
									textDecoration: "none",
								}}
								fontFamily="inter"
								transition="colors 0.3s"
							>
								{link.label}
							</ChakraLink>
						))}
						<ChakraLink
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
							_hover={{ textDecoration: "none" }}
						>
							<Button
								bg="#0077FF"
								_hover={{ bg: "#0066DD" }}
								color="white"
								px={6}
								borderRadius="full"
								fontFamily="inter"
							>
								<MessageCircle className="w-4 h-4" />
								Let's Talk
							</Button>
						</ChakraLink>
					</Flex>

					{/* Mobile Menu Button */}
					<Box
						as="button"
						display={{ base: "block", md: "none" }}
						color="white"
						p={2}
						onClick={() => setIsOpen(!isOpen)}
						_hover={{ cursor: "pointer" }}
					>
						{isOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</Box>
				</Flex>
			</Container>

			{/* Mobile Navigation */}
			<MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
		</Box>
	);
}
