"use client";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import {
	Box,
	Button,
	Container,
	Flex,
	Link as ChakraLink,
	Image,
} from "@chakra-ui/react";
import MobileNav from "./MobileNavigation";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Work", href: "#work" },
	{ label: "Services", href: "#services" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar({ bold }: { bold?: boolean }) {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeHash, setActiveHash] = useState("");
	const [pathname, setPathname] = useState("");

	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	useEffect(() => {
		const updateState = () => {
			setScrolled(window.scrollY > 20);
			setActiveHash(window.location.hash);
			setPathname(window.location.pathname);
		};

		updateState();
		window.addEventListener("scroll", updateState);
		window.addEventListener("hashchange", updateState);

		return () => {
			window.removeEventListener("scroll", updateState);
			window.removeEventListener("hashchange", updateState);
		};
	}, []);

	const isActive = (href: string) => {
		if (href === "/") {
			return pathname === "/" && !activeHash;
		}

		return activeHash === href;
	};

	return (
		<Box
			as="nav"
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={50}
			transition="all 0.3s"
			bg={scrolled || bold ? "whiteAlpha.950" : "whiteAlpha.850"}
			backdropFilter="blur(12px)"
			borderBottom={
				scrolled || bold ? "1px solid rgba(15, 23, 42, 0.08)" : "none"
			}
			boxShadow={scrolled ? "sm" : "none"}
		>
			<Container maxW="6xl" px={{ base: 6, md: 8 }}>
				<Flex justify="space-between" align="center" h={20}>
					<ChakraLink
						as={NextLink}
						href="/"
						_hover={{ textDecoration: "none" }}
					>
						<Image
							src="/assets/images/logo-primary-dark-nude.png"
							alt="Mitudo Agency logo"
							h={20}
							w={100}
							objectFit="contain"
							transition="transform 0.2s"
						/>
					</ChakraLink>

					<Flex
						align="center"
						gap={8}
						display={{ base: "none", md: "flex" }}
					>
						{navLinks.map((link) => (
							<ChakraLink
								key={link.label}
								as={NextLink}
								href={link.href}
								fontSize="sm"
								fontWeight="medium"
								color={
									isActive(link.href) ? "#0077FF" : "#4A5568"
								}
								_hover={{
									color: "#0077FF",
									textDecoration: "none",
								}}
								transition="color 0.3s"
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
								color="white"
								_hover={{ bg: "#0066DD" }}
								borderRadius="full"
								px={6}
							>
								<MessageCircle className="w-4 h-4" />
								Let's Talk
							</Button>
						</ChakraLink>
					</Flex>

					<Box
						as="button"
						display={{ base: "block", md: "none" }}
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

			<MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
		</Box>
	);
}
