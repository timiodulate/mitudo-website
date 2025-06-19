"use client";
// src/components/Services.tsx
import { SimpleGrid, Box, Heading, Text, Container } from "@chakra-ui/react";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
// src/components/ServiceCard.tsx
import { Icon, VStack, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Image from "next/image";
import { aboutUsIllustration, webDevIllustration } from "@/images";
import SectionTitle from "../shared/SectionTitleWrapper";

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
				<Flex
					direction={{
						base: "column",
						md: "row",
					}}
					gap={{ mdDown: 6 }}
				>
					<Flex
						position={{ base: "relative" }}
						flex={{ md: 3 }}
						// whileHover={{ y: -5, scale: 1.05 }}
						align={"center"}
						justify={"center"}
						bg="services.card.bg"
						// w={"5rem"}
						aspectRatio={"square"}
						textAlign="center"
						// p={8}
						// boxShadow="lg"
						// borderRadius="xl"
						// shadow="lg"
					>
						<Image
							src={aboutUsIllustration}
							alt="hero illustration"
							fill
							objectFit="contain"
						/>
					</Flex>

					<Flex
						flex={{ md: 7 }}
						flexDirection={{ base: "column" }}
						justifyContent={{ base: "center" }}
					>
						<SectionTitle title="Our Mission & Story" md={2} />

						<VStack
							// h={"100%"}
							maxW={{ base: "100%" }}
							w={{ base: "68%" }}
							mx={{ md: "auto" }}
							gap={2}
							alignItems={{ base: "flex-start" }}
							justifyContent={{ md: "center" }}
							textAlign={{ base: "center" }}
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
								Our Mission is to empower professionals,
								entrepreneurs, and local businesses through
								innovative digital solutions. We believe in the
								transformative power of technology and strive to
								deliver exceptional results that drive growth
								and success.
							</Text>
						</VStack>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};
