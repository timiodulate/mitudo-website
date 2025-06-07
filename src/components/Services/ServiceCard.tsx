// src/components/ServiceCard.tsx
import { Box, Icon, Text, VStack, Heading } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorModeValue } from "../ui/color-mode";

interface ServiceCardProps {
	icon: IconType | any;
	title: string;
	description: string;
	key?: number | string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
	return (
		<Box
			// whileHover={{ y: -5, scale: 1.05 }}

			bg="services.card.bg"
			p={6}
			minH={"20rem"}
			// p={8}
			borderRadius="xl"
			shadow="lg"
			// boxShadow="lg"
			textAlign="center"
			_hover={{
				animation: "servicesCard",
			}}
			cursor={"pointer"}
		>
			<VStack gap={4}>
				<Box mb={4} fontSize="5xl" color={"service.card.icon"}>
					{icon}
				</Box>

				<Heading as="h3" size="lg" color="services.card.text">
					{title}
				</Heading>

				<Text color="services.card.text">{description}</Text>
			</VStack>
		</Box>
	);
};
