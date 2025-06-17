"use client";
// src/components/Services.tsx
import { SimpleGrid, Box, Heading, Text, Container } from "@chakra-ui/react";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
// src/components/ServiceCard.tsx
import { Icon, VStack, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Image from "next/image";
import { webDevIllustration } from "@/images";
import SectionTitle from "../shared/SectionTitle";

interface ServiceCardProps {
	icon: IconType | any;
	title: string;
	description: string;
	index: number;
	key?: number | string;
}

export const AboutUs = () => {
	const ourServices = [
		{
			icon: <FaLaptopCode />,

			title: "Web Development",
			// title="Web solutions"

			description:
				"Modern, responsive, and high-performance websites for a stunning online presence.",
			// description="Crafting intuitive apps for iOS and Android platforms. Elegant design, robust code."
		},
	];

	return (
		<Box as="section" id="about-us">
			<Container py={{ base: 12, md: 20 }}>
				<SectionTitle title="Our Mission & Story" />

				<Flex
					direction={{
						base: "column",
						md: "row-reverse",
					}}
					gap={{ mdDown: 6 }}
				>
					<Flex
						flex={{ md: 1 }}
						// whileHover={{ y: -5, scale: 1.05 }}
						align={"center"}
						justify={"center"}
						bg="services.card.bg"
						// w={"5rem"}
						aspectRatio={"square"}
						textAlign="center"
						// p={8}
						// boxShadow="lg"
						borderRadius="xl"
						shadow="lg"
					>
						{/* <Box fontSize="5xl" color={"service.card.icon"}>
					{icon}
				</Box> */}
						<Image
							src={webDevIllustration}
							alt="hero illustration"
						/>
					</Flex>

					<Box flex={{ md: 1 }}>
						<VStack
							h={"100%"}
							maxW={{ base: "100%" }}
							w={{ base: "320px" }}
							mx={{ md: "auto" }}
							gap={2}
							alignItems={{ base: "flex-start" }}
							justifyContent={{ md: "center" }}
						>
							{/* <Heading
								as="h3"
								size="2xl"
								fontWeight={"bold"}
								color="services.card.text"
								textAlign={{ base: "left" }}
							>
								Our Mission & Story
							</Heading> */}

							<Text color="services.card.text">
								Mitudo Digital Solutions Agency is committed to
								empowering local businesses through innovative
								digital solutions. We believe in the
								transformative power of technology and strive to
								deliver exceptional results that drive growth
								and success.
							</Text>
						</VStack>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
