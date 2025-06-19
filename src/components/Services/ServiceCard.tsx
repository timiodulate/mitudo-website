// src/components/ServiceCard.tsx
import { Box, Icon, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorModeValue } from "../ui/color-mode";
import Image from "next/image";
import { webDevIllustration } from "@/images";

interface ServiceCardProps {
	icon: IconType | any;
	title: string;
	description: string;
	index: number;
	key?: number | string;
}

export const ServiceCard = ({
	icon,
	title,
	description,
	index,
}: ServiceCardProps) => {
	const isEven = index % 2 == 0;
	// console.log(isEven);

	return (
		<Flex
			direction={{
				base: "column",
				// md: isEven ? "row-reverse" : "row",
			}}
			alignItems={"center"}
			gap={{ mdDown: 6 }}
			//
			borderRadius="xl"
			shadow="lg"
			_hover={{
				animation: "servicesCard",
			}}
			p={6}
			cursor={"pointer"}
		>
			<Flex
				// flex={{ md: 1 }}
				// whileHover={{ y: -5, scale: 1.05 }}
				align={"center"}
				justify={"center"}
				// bg="services.card.bg"
				w={"5rem"}
				aspectRatio={"square"}
				// p={8}
				borderRadius="xl"
				// boxShadow="lg"
				textAlign="center"
				cursor={"pointer"}
			>
				<Image src={icon} alt="hero illustration" />
			</Flex>

			<Box flex={{ md: 1 }} w={"100%"}>
				<VStack
					h={"100%"}
					maxW={{ base: "100%" }}
					// w={{ base: "320px" }}
					mx={{ md: "auto" }}
					gap={2}
					alignItems={{ base: "center" }}
					justifyContent={{ md: "flex-start" }}
					textAlign={{ base: "center" }}
				>
					<Heading
						as="h3"
						size="xl"
						fontWeight={"bold"}
						color="services.card.text"
						// textAlign={{ base: "left" }}
					>
						{title}
					</Heading>

					<Text color="services.card.text">{description}</Text>
				</VStack>
			</Box>
		</Flex>
	);
};
