"use client";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
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
import { whatsappLink } from "@/data";
import { navLinks, ROUTES } from "@/data/routes";

export const isNavLinkActive = (pathname: string, href: string) =>
	href === ROUTES.home ? pathname === href : pathname.startsWith(href);

export default function Navbar({ bold }: { bold?: boolean }) {
	const pathname = usePathname() ?? ROUTES.home;
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Close the mobile menu whenever the page changes.
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Stop the page scrolling behind the open mobile menu, and close on Escape.
	useEffect(() => {
		if (!isOpen) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen]);

	const solid = scrolled || bold || isOpen;

	return (
		<Box
			as="nav"
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={50}
			transition="all 0.3s"
			bg={solid ? "white" : "whiteAlpha.850"}
			borderBottom={solid ? "1px solid rgba(15, 23, 42, 0.08)" : "none"}
			boxShadow={scrolled ? "sm" : "none"}
			backdropFilter="blur(8px)"
		>
			<Container maxW="6xl" px={{ base: 6, md: 8 }}>
				<Flex justify="space-between" align="center" h={20}>
					<ChakraLink
						as={NextLink}
						href={ROUTES.home}
						_hover={{ textDecoration: "none" }}
					>
						<Image
							src="/assets/images/logo-primary-dark-nude.png"
							alt="Mitudo Agency logo"
							h={20}
							w={100}
							objectFit="contain"
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
									isNavLinkActive(pathname, link.href)
										? "#0077FF"
										: "#4A5568"
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
								<MessageCircle size={16} />
								Let&apos;s Talk
							</Button>
						</ChakraLink>
					</Flex>

					<Box
						as="button"
						display={{ base: "flex", md: "none" }}
						alignItems="center"
						justifyContent="center"
						p={2}
						color="#0D1B2A"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						onClick={() => setIsOpen((open) => !open)}
						_hover={{ cursor: "pointer" }}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</Box>
				</Flex>
			</Container>

			<MobileNav
				isOpen={isOpen}
				pathname={pathname}
				onClose={() => setIsOpen(false)}
			/>
		</Box>
	);
}
