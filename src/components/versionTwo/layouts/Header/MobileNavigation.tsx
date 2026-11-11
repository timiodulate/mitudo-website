"use client";
import React from "react";
import NextLink from "next/link";
import { MessageCircle } from "lucide-react";
import { Button, Box, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "@/components/ui/motion";
import { whatsappLink } from "@/data";
import { navLinks, ROUTES } from "@/data/routes";

const isActive = (pathname: string, href: string) =>
	href === ROUTES.home ? pathname === href : pathname.startsWith(href);

export default function MobileNav({
	isOpen,
	pathname,
	onClose,
}: {
	isOpen: boolean;
	pathname: string;
	onClose: () => void;
}) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="mobile-nav"
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.2 }}
				>
					<Box
						display={{ base: "block", md: "none" }}
						bg="white"
						borderTop="1px solid"
						borderColor="slate.100"
						boxShadow="lg"
						px={6}
						pt={2}
						pb={6}
						maxH="calc(100dvh - 5rem)"
						overflowY="auto"
					>
						<VStack gap={1} align="stretch">
							{navLinks.map((link) => {
								const active = isActive(pathname, link.href);
								return (
									<ChakraLink
										key={link.label}
										as={NextLink}
										href={link.href}
										display="block"
										py={3}
										fontWeight="medium"
										color={active ? "#0077FF" : "#0D1B2A"}
										borderBottom="1px solid"
										borderColor="slate.100"
										_hover={{
											color: "#0077FF",
											textDecoration: "none",
										}}
										onClick={onClose}
									>
										{link.label}
									</ChakraLink>
								);
							})}

							<Box pt={5}>
								<ChakraLink
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									display="block"
									_hover={{ textDecoration: "none" }}
									onClick={onClose}
								>
									<Button
										w="full"
										bg="#0077FF"
										_hover={{ bg: "#0066DD" }}
										color="white"
										borderRadius="full"
									>
										<MessageCircle size={16} />
										Let&apos;s Talk
									</Button>
								</ChakraLink>
							</Box>
						</VStack>
					</Box>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
