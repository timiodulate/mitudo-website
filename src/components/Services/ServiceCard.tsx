// src/components/ServiceCard.tsx
import { Box, Icon, Text, VStack, Heading } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ServiceCardProps {
	icon: IconType;
	title: string;
	text: string;
	key?: number | string;
}

export const ServiceCard = ({ icon, title, text }: ServiceCardProps) => {
	return (
		<Box
			p={8}
			bg="white"
			boxShadow="lg"
			borderRadius="xl"
			textAlign="center"
			// whileHover={{ y: -5, scale: 1.05 }}
			// transition={{ duration: 0.3 }}
		>
			<VStack gap={4}>
				{/* <Icon as={icon} w={16} h={16} color="brand.primary" /> */}

				<Heading as="h3" size="lg" color="neutral.gray.darkGray">
					{title}
				</Heading>

				<Text color="neutral.gray.mediumGray">{text}</Text>
			</VStack>
		</Box>
	);
};
