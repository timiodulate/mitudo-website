// src/components/ServiceCard.tsx
import { Box, Icon, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Image from "next/image";
import { webDevIllustration } from "@/images";

interface ServiceCardProps {
	message: string;
	name: string;
	title: string;
	index: number;
	key?: number | string;
}

export const TestimonyCard = ({
	message,
	name,
	title,
	index,
}: ServiceCardProps) => {
	return (
		<Flex
			direction={{
				base: "column",
				// md: isEven ? "row-reverse" : "row",
			}}
			gap={6}
			p={6}
			textAlign={"left"}
			//
			borderRadius="xl"
			shadow="lg"
			// _hover={{
			// 	animation: "servicesCard",
			// }}
		>
			<Text
				flex={"1 70px"}
				// flexBasis={80}
				// h={27}
				color="services.card.text"
			>
				{message}
			</Text>

			<Box>
				<Text fontWeight={"bold"} color="services.card.text">
					{name}
				</Text>

				<Text color="services.card.text">{title}</Text>
			</Box>
		</Flex>
	);
};
