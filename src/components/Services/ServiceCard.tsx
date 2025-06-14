// src/components/ServiceCard.tsx
import { Box, Icon, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorModeValue } from "../ui/color-mode";

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
	console.log(isEven);

	return (
		<Flex
			direction={{
				base: "column",
				md: isEven ? "row-reverse" : "row",
			}}
			gap={{ mdDown: 6 }}
		>
			<Flex
				flex={{ md: 1 }}
				// whileHover={{ y: -5, scale: 1.05 }}
				align={"center"}
				justify={"center"}
				bg="services.card.bg"
				// p={6}
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
				<Box fontSize="5xl" color={"service.card.icon"}>
					{icon}
				</Box>
			</Flex>

			<Box flex={{ md: 1 }}>
				<VStack
					h={"100%"}
					maxW={{ md: "60%" }}
					mx={{ md: "auto" }}
					gap={2}
					alignItems={{ base: "flex-start" }}
					justifyContent={{ md: "center" }}
				>
					<Heading
						as="h3"
						size="2xl"
						fontWeight={"bold"}
						color="services.card.text"
						textAlign={{ base: "left" }}
					>
						{title}
					</Heading>

					<Text color="services.card.text">{description}</Text>
				</VStack>
			</Box>
		</Flex>
	);
};
