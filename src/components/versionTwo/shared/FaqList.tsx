"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { FAQ } from "@/data/services";

function FaqItem({ faq, bg }: { faq: FAQ; bg: string }) {
	const [open, setOpen] = useState(false);
	return (
		<Box bg={bg} borderRadius="2xl" border="1px solid" borderColor="slate.200">
			<Flex
				as="button"
				w="full"
				textAlign="left"
				justify="space-between"
				align="center"
				gap={4}
				px={6}
				py={5}
				cursor="pointer"
				aria-expanded={open}
				onClick={() => setOpen((value) => !value)}
			>
				<Text fontWeight="semibold" color="#0D1B2A">
					{faq.q}
				</Text>
				<Box
					flexShrink={0}
					color="#0077FF"
					transition="transform 0.2s"
					transform={open ? "rotate(180deg)" : "none"}
				>
					<ChevronDown size={18} />
				</Box>
			</Flex>
			{open && (
				<Text px={6} pb={5} color="#4A5568" fontSize="sm" lineHeight="tall">
					{faq.a}
				</Text>
			)}
		</Box>
	);
}

export default function FaqList({ faqs, itemBg = "white" }: { faqs: FAQ[]; itemBg?: string }) {
	return (
		<VStack align="stretch" gap={3}>
			{faqs.map((faq) => (
				<FaqItem key={faq.q} faq={faq} bg={itemBg} />
			))}
		</VStack>
	);
}
