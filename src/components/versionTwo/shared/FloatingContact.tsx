"use client";
import React, { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Mail, MessageCircle, MessagesSquare, X } from "lucide-react";
import { Box, Flex, Link as ChakraLink, Text, chakra } from "@chakra-ui/react";
import { businessEmail, whatsappLink } from "@/data";
import { ROUTES } from "@/data/routes";

const options = [
	{ icon: MessageCircle, label: "WhatsApp", detail: "Fastest reply", href: whatsappLink, external: true, color: "#25D366" },
	{ icon: Mail, label: "Email", detail: businessEmail, href: `mailto:${businessEmail}`, external: false, color: "#0077FF" },
	{ icon: FileText, label: "Enquiry form", detail: "Tell us what you need", href: ROUTES.contact, external: false, color: "#00A6AE" },
];

/** The contact button that sits on every page: WhatsApp, email or the enquiry form. */
export default function FloatingContact() {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
		const onClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("mousedown", onClick);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("mousedown", onClick);
		};
	}, [open]);

	return (
		<Box ref={ref} position="fixed" right={{ base: 4, md: 6 }} bottom={{ base: 4, md: 6 }} zIndex={40}>
			{open && (
				<Box
					id="floating-contact-menu"
					position="absolute"
					right={0}
					bottom="72px"
					w="260px"
					bg="white"
					borderRadius="2xl"
					border="1px solid"
					borderColor="slate.200"
					boxShadow="0 20px 45px -15px rgba(13, 27, 42, 0.35)"
					p={2}
				>
					<Text px={3} pt={2} pb={1} fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" color="#4A5568">
						Contact us
					</Text>
					{options.map((option) => (
						<ChakraLink
							key={option.label}
							as={option.external ? undefined : option.href.startsWith("/") ? NextLink : undefined}
							href={option.href}
							target={option.external ? "_blank" : undefined}
							rel={option.external ? "noopener noreferrer" : undefined}
							display="flex"
							alignItems="center"
							gap={3}
							px={3}
							py={2.5}
							borderRadius="xl"
							_hover={{ bg: "#F5F7FA", textDecoration: "none" }}
							onClick={() => setOpen(false)}
						>
							<Flex flexShrink={0} w={9} h={9} borderRadius="lg" align="center" justify="center" bg={`${option.color}1A`} color={option.color}>
								<option.icon size={18} />
							</Flex>
							<Box minW={0}>
								<Text fontSize="sm" fontWeight="semibold" color="#0D1B2A">
									{option.label}
								</Text>
								<Text fontSize="xs" color="#4A5568" truncate>
									{option.detail}
								</Text>
							</Box>
						</ChakraLink>
					))}
				</Box>
			)}

			<chakra.button
				type="button"
				aria-label={open ? "Close contact options" : "Contact us"}
				aria-expanded={open}
				aria-controls="floating-contact-menu"
				onClick={() => setOpen((value) => !value)}
				w={14}
				h={14}
				borderRadius="full"
				bg={open ? "#0D1B2A" : "#0077FF"}
				color="white"
				display="flex"
				alignItems="center"
				justifyContent="center"
				cursor="pointer"
				boxShadow="0 12px 30px -8px rgba(0, 119, 255, 0.55)"
				transition="all 0.2s"
				_hover={{ transform: "translateY(-2px)" }}
			>
				{open ? <X size={22} /> : <MessagesSquare size={22} />}
			</chakra.button>
		</Box>
	);
}
