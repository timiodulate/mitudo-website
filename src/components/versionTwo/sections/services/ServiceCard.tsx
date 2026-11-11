"use client";
import React from "react";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Box, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Service, getService } from "@/data/services";
import { getServiceRoute } from "@/data/routes";

export const kindLabel: Record<Service["kind"], string | null> = {
	service: null,
	package: "Package",
	"add-on": "Website add-on",
};

export function KindBadge({ kind }: { kind: Service["kind"] }) {
	const label = kindLabel[kind];
	if (!label) return null;
	return (
		<Box
			as="span"
			display="inline-block"
			px={2.5}
			py={0.5}
			borderRadius="full"
			fontSize="xs"
			fontWeight="semibold"
			bg={kind === "package" ? "rgba(0, 194, 203, 0.15)" : "rgba(0, 119, 255, 0.1)"}
			color={kind === "package" ? "#008C93" : "#0077FF"}
		>
			{label}
		</Box>
	);
}

export default function ServiceCard({
	service,
	bg = "white",
}: {
	service: Service;
	bg?: string;
}) {
	const packages = (service.partOf ?? [])
		.map((slug) => getService(slug)?.name)
		.filter(Boolean);

	return (
		<ChakraLink
			as={NextLink}
			href={getServiceRoute(service.slug)}
			display="block"
			h="full"
			_hover={{ textDecoration: "none" }}
		>
			<Flex
				direction="column"
				h="full"
				bg={bg}
				borderRadius="2xl"
				p={6}
				border="1px solid"
				borderColor={service.kind === "package" ? "rgba(0, 194, 203, 0.5)" : "slate.200"}
				transition="all 0.25s"
				_hover={{ borderColor: "#0077FF", boxShadow: "lg" }}
			>
				<Box mb={2} minH={service.kind === "service" ? 0 : 6}>
					<KindBadge kind={service.kind} />
				</Box>
				<Heading as="h3" fontSize="lg" fontFamily="poppins" color="#0D1B2A" mb={2}>
					{service.name}
				</Heading>
				<Text color="#4A5568" fontSize="sm" lineHeight="tall" flex={1}>
					{service.summary}
				</Text>
				{packages.length > 0 && (
					<Text fontSize="xs" color="#4A5568" mt={3}>
						Also in the {packages.join(", ")} package
					</Text>
				)}
				<Flex align="center" gap={1} mt={4} fontSize="sm" fontWeight="semibold" color="#0077FF">
					Learn more <ArrowRight size={14} />
				</Flex>
			</Flex>
		</ChakraLink>
	);
}
