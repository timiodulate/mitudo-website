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
	console.log(isEven);

	return (
		<Flex
			direction={{
				base: "column",
				md: isEven ? "row-reverse" : "row",
			}}
			// gap={{ mdDown: 6 }}
			//
			p={6} // Adjust overall card padding as needed
			borderRadius="xl"
			shadow="lg"
			_hover={{
				animation: "servicesCard",
			}}
			overflow="hidden" // Ensure no overflow from illustration positioning
			position="relative" // For absolute positioning of illustration
			minH="250px" // Ensure a minimum height for all cards
		>
			<Flex
				// flex={{ md: 3 }}
				// // whileHover={{ y: -5, scale: 1.05 }}
				// align={"center"}
				// justify={"center"}
				// bg="services.card.bg"
				// // p={6}
				// // minH={"20rem"}
				// aspectRatio={"square"}
				// // p={8}
				// borderRadius="xl"
				// // shadow="lg"
				// // boxShadow="lg"
				// textAlign="center"
				// _hover={{
				// 	animation: "servicesCard",
				// }}
				// cursor={"pointer"}

				position="absolute"
				top="0" // Adjust as needed
				right="0" // Adjust as needed
				width="50%" // Control its horizontal space
				height="100%" // Control its vertical space
				justifyContent="flex-end" // Align to the right
				alignItems="flex-start" // Align to the top
				p={4} // Padding around the illustration within its container
				pointerEvents="none" // Prevent illustration from blocking clicks
			>
				{/* <Box fontSize="5xl" color={"service.card.icon"}>
					{icon}
				</Box> */}
				<Box width="100%" height="auto" maxW="200px" maxH="200px">
					{" "}
					{/* Max size for the SVG */}
					<Image src={webDevIllustration} alt="hero illustration" />
				</Box>
			</Flex>

			<Box
				flex={{ md: 7 }} //
				// pr="50%"
			>
				<VStack
					h={"100%"}
					// maxW={{ md: "60%" }}
					// mx={{ md: "auto" }}
					gap={4}
					alignItems={{ base: "flex-start" }}
					justifyContent={{ md: "center" }}
				>
					<Heading
						as="h3"
						size="3xl"
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
