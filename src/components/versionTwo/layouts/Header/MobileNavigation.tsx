import React from "react";
import { MessageCircle } from "lucide-react";
import { Button, Box, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "@/components/ui/motion";

export default function MobileNav({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}) {
	const navLinks = [
		{ label: "Work", href: "#work" },
		{ label: "Services", href: "#services" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "Contact", href: "#contact" },
	];

	const whatsappLink =
		"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.";

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
				>
					<Box
						display={{ base: "block", md: "none" }}
						bg="#0D1B2A"
						borderTop="1px solid"
						borderColor="slate.800"
						px={6}
						py={6}
					>
						<VStack gap={4} align="stretch">
							{navLinks.map((link) => (
								<ChakraLink
									key={link.label}
									href={link.href}
									display="block"
									color="slate.300"
									_hover={{
										color: "#00C2CB",
										textDecoration: "none",
									}}
									transition="colors 0.3s"
									fontFamily="inter"
									py={2}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</ChakraLink>
							))}
							<Box pt={4}>
								<ChakraLink
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									_hover={{ textDecoration: "none" }}
								>
									<Button
										w="full"
										bg="#0077FF"
										_hover={{ bg: "#0066DD" }}
										color="white"
										borderRadius="full"
										fontFamily="inter"
									>
										<MessageCircle className="w-4 h-4" />
										Let's Talk
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
